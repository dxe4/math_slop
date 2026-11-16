
# Training Pipelines and Reproducible Computation

## Purpose and prerequisites

A correct gradient routine is one component of a learning system. A training pipeline also chooses rows, fits transformations, advances random streams, updates optimizer and architectural state, selects checkpoints, and reports evidence. This chapter turns those dependencies into an auditable state machine and proves when an interrupted run should reproduce an uninterrupted one.

The prerequisites are learning contracts, reverse-mode differentiation, conditioning, stochastic optimization, and regularization. The aim is not “the same seed always produces the same model.” That slogan ignores data identity, execution order, floating arithmetic, hidden state, and software changes. Reproducibility is a declared relation between two executions under a declared equivalence tolerance.

## A pipeline is a directed state transition

Let the complete training state at step $t$ be

$S_{t}=(\theta _{t},o_{t},a_{t},r_{t},d_{t},c,e_{t})$,

where:

- $\theta _{t}$ are model parameters;
- $o_{t}$ is optimizer and scheduler state;
- $a_{t}$ is architectural mutable state such as running normalization statistics;
- $r_{t}$ is every random-stream state;
- $d_{t}$ identifies the immutable data snapshot and split assignment;
- $c$ is resolved configuration;
- $e_{t}$ records execution semantics needed for replay.

A step consumes a named batch identifier $b_{t}$ and produces

$(S_{t+1},m_{t})=T(S_{t},b_{t})$,

where $m_{t}$ is a metric record. The batch identifier should select rows from the immutable snapshot; copying arbitrary row values into an untracked cache obscures provenance.

The transition $T$ includes forward computation, loss reduction, reverse accumulation, clipping if any, optimizer update, scheduler timing, mutable-layer updates, and metric aggregation. If validation triggers control flow, that event is also part of $T$ or a higher-level transition. A pipeline diagram is useful only if its numerical alternative lists these inputs and outputs.

## Data lineage before optimization

Each observational row needs at least:

- a stable row or group identifier;
- feature observation times and prediction time;
- target definition and availability time;
- provenance and transformation version;
- split membership determined under the declared unit of independence.

Compute split membership before fitting any data-dependent transformation. A safe abstract flow is

`raw snapshot → validate contract → assign groups/times → splits → fit transforms on training rows → transform each split → tune on allowed rows → freeze → evaluate once`.

The arrow order is an information-flow constraint. A global mean computed before a train/test split can leak even if labels were not used. Duplicate people, devices, households, or time windows across splits can make row-level separation fictitious. Hashing row bytes does not discover semantic dependence; the unit must come from the application contract.

### Fingerprints and their boundary

A content digest can identify an exact byte snapshot. Record the digest algorithm, canonicalization procedure, schema, row count, and ordered or order-independent convention. A matching digest is strong evidence of matching bytes. It does not prove the data are lawful, representative, correctly labeled, independent, or causally meaningful.

## Learned transformations are fitted objects

Represent a preprocessing stage as two maps:

$\phi = \operatorname{fit}(D_{\mathrm{train}},c_{\phi})$,

$X' = \operatorname{apply}(\phi ,X)$.

The fitted state $\phi$ belongs in the checkpoint or in an immutable artifact referenced by digest. Examples include means and scales, vocabularies, missing-value rules, category mappings, feature selection, and target encodings. “The same code” can yield a different map when fitted on different rows.

### Worked train-only standardization

Training feature values are $(0,2)$ and a held-out value is $100$. The training mean is $1$ and population standard deviation is $1$, so transformed training values are $(-1,1)$ and held-out value is $99$.

If all three values are used, the mean is $34$ and the scale is about $46.676$; the transformed held-out value becomes about $1.414$. The latter looks numerically gentle because test information changed the coordinate system. Better conditioning obtained by leakage is invalid evidence.

## Randomness is a set of named streams

A seed initializes a pseudorandom state; it is not the state itself. One run may use distinct streams for:

- parameter initialization;
- data shuffling or sampling;
- stochastic augmentation;
- architectural masks;
- synthetic evaluation or bootstrap calculations.

If all operations share one sequential stream, inserting a diagnostic draw changes every later random event. Named streams or counter-based keys make dependencies more local. For each random event record a semantic key such as

`(run_id, stream_name, epoch, batch_id, layer_id, call_index)`.

The key convention must not depend accidentally on parallel completion order. Reusing a mask key across steps can create unintended perfect correlation; changing key assignment on restart breaks equivalence.

### Three reproducibility claims

1. **Bitwise replay:** serialized outputs are identical. This requires tightly fixed arithmetic, operation order, software, hardware semantics, and state.
2. **Numerical replay:** outputs agree under declared absolute/relative tolerances. This admits bounded floating differences but requires comparison at named checkpoints.
3. **Statistical replication:** aggregate conclusions over independent runs agree under a declared analysis. This is a scientific evidence claim, not replay of one trajectory.

State which one is intended. A bitwise repeat of a biased split is perfectly reproducible and scientifically weak.

## The reference training loop

The following dependency-free pseudocode makes state order explicit. The helper random_keys is a pure transition returning the per-event forward keys and the successor stream/counter state, without mutating committed state; only a successful atomic commit installs that successor. A failure before commit retries the old complete state and the same keys. For an illustrative counter convention, cursor 4 reserves two event keys (4,5) and returns successor 6; after commit the next reservation returns (6,7) and successor 8, while a failed pre-commit retry repeats (4,5). These keys and the successor are different state roles; this ledger illustrates ownership and replay, not a PRNG or executable trainer. A stateless semantic-key scheme may retain the random payload while checkpointed next_step advances.

```text
state = restore_or_initialize(resolved_config, data_snapshot)
for step from state.next_step to total_steps - 1:
    batch_key = schedule.batch_key(state.sampler, step)
    rows, sampler_next = materialize(data_snapshot, batch_key)
    x, y = apply_frozen_transform(state.transform, rows)
    draw_keys, random_next = random_keys(state.random, step, model_structure)
    prediction, trace, architecture_next = forward(
        state.parameters, state.architecture, x, draw_keys, mode="train")
    loss_sum, denominator, loss_trace = loss_contract(prediction, y, rows.weights)
    loss = loss_sum / denominator
    full_trace = compose(trace, loss_trace, division_by=denominator)
    gradients = reverse(full_trace, output=loss, seed=1)
    gradients, clip_record = declared_clip(gradients, state.optimizer)
    parameters_next, optimizer_next = optimizer_step(
        state.parameters, gradients, state.optimizer)
    scheduler_next = scheduler_step(state.scheduler, step, validation_events)
    metrics_next = aggregate(state.metrics, loss_sum, denominator, clip_record)
    state = commit_atomically(parameters_next, optimizer_next,
                              scheduler_next, architecture_next,
                              sampler_next, random_next, metrics_next,
                              next_step=step+1)
```

The loss stores numerator and denominator separately. Averaging batch means equally is wrong when denominators differ. “Scheduler step” must declare whether a changed learning rate applies to the current or next update. Architectural state must come from the same forward pass whose trace is differentiated.

## Checkpoints are semantic state, not weight files

A restartable checkpoint contains or securely references:

- model parameters, names, shapes, types, and ordering;
- optimizer moments, momentum buffers, counters, and parameter-group mapping;
- learning-rate and other scheduler state;
- normalization running statistics and other mutable layer state;
- sampler permutation, cursor, and epoch;
- all random states or semantic counter keys;
- fitted preprocessing state;
- resolved configuration, including defaults after expansion;
- immutable data and split fingerprints;
- current step and the precise next transition;
- code/build identity and numerical execution settings;
- accumulated metric numerators, denominators, and slice definitions.

Write checkpoints atomically: create a complete temporary artifact, verify its digest and schema, then rename or otherwise commit it as one operation. A process failure should leave either the earlier valid checkpoint or the complete new one, not a partially written file labeled successful.

### Restart equivalence theorem

Assume:

1. $T$ is deterministic given the complete state and batch identifier;
2. an uninterrupted and restarted run have equal state $S_{k}$ at checkpoint step $k$;
3. they use the same future batch identifiers and execution semantics.

Then their states and metric records are equal at every later step.

**Proof.** At step $k$, inputs to deterministic $T$ agree, so outputs $S_{k+1},m_{k}$ agree. Inductively, equality at step $t$ and equality of $b_{t}$ imply equality at $t+1$. Therefore equality holds for all future steps. The theorem is simple because all difficulty is concentrated in the phrase *complete state*.

The contrapositive is valid but limited: if the runs diverge, at least one of the three assumptions failed. Divergence does not uniquely identify which state, batch, or execution condition differed. Use state-component checks and transition-level diffs to localize the cause.

## Floating arithmetic and reduction order

Floating addition is not associative. For finite precision values, $(a+b)+c$ may differ from $a+(b+c)$. Parallel reductions can therefore vary with worker count or scheduling. A deterministic order, pairwise tree, or compensated summation can improve replay or accuracy, but each has a cost and still needs a defined type.

Compare quantities using a mixed tolerance

$\lvert x-y\rvert\le atol+rtol \max\left(\lvert x\rvert,\lvert y\rvert\right)$.

Choose tolerances from scale and error analysis, not after seeing a failure. For arrays also report a norm, maximum component error, and the index of that component. A loose final-loss tolerance can hide an early state divergence that later cancels.

### Worked reduction failure

In idealized decimal arithmetic with four significant digits, sum $10^{4}$, $1$, and $-10^{4}$. Left to right, $(10^{4}+1)$ rounds to $10^{4}$, then adding $-10^{4}$ yields $0$. Adding the large opposites first yields $1$. Both follow the same real-number expression. A metric ledger must record reduction behavior if bitwise or tight numerical replay matters.

## Selection is part of the training algorithm

If a validation score chooses an epoch, architecture, regularization weight, threshold, or random seed, then validation data influence the returned model. The selected procedure is not just “fit on training data”; it includes the selection rule.

Test data must remain outside this adaptive loop. Repeatedly inspecting test results and revising choices turns the test set into another tuning set. A final frozen evaluation can estimate performance only under a declared sampling framework; one number does not establish all future, subgroup, or shifted behavior.

Early stopping needs a complete specification:

- metric and reduction;
- evaluation schedule;
- direction and minimum improvement;
- patience and tie rule;
- checkpoint restored (best, last, or averaged);
- handling of missing or nonfinite values.

Restoring the “best weights” without their architectural state can create a hybrid model that never existed during training.

## Metric ledgers and accessible reporting

For each metric, store:

| Field | Example |
| --- | --- |
| Prediction object | probability, logit, real value, class, or action |
| Outcome and time | exact target and availability |
| Rows | split fingerprint and slice predicate |
| Numerator | sum of losses, correct cases, true positives |
| Denominator | cases, weights, positives, or exposure |
| Undefined rule | explicit result for zero denominator |
| Aggregation | micro, macro, weighted, per-case |
| Uncertainty scope | none, conditional resampling, or named sampling model |
| Decision threshold | value and selection data |

A plot alone is insufficient. Provide the underlying table, exact values, units, and a prose conclusion that names the evidence boundary. Color must not be the sole carrier of train/validation/test status.

## Failure types before retries

Classify failures before deciding what to do:

- **contract failure:** missing column, invalid unit, future feature, split overlap;
- **mathematical failure:** shape mismatch, invalid denominator, violated solver hypothesis;
- **numerical failure:** overflow, nonfinite value, excessive residual, unstable solve;
- **state failure:** missing optimizer buffer, mismatched running statistics, stale cursor;
- **infrastructure failure:** interrupted write or unavailable compute;
- **evidence failure:** no permitted rows for a slice or no support for a deployment claim.

An infrastructure failure may justify a retry from a verified checkpoint. Automatically retrying a deterministic numerical failure wastes work and can hide its first cause. Dropping invalid rows changes the estimand and requires an explicit contract, not a warning buried in logs.

## A provenance record

A minimum run record should answer:

1. What immutable data and split were used?
2. What resolved configuration and code identity defined the program?
3. Which state initialized training or was restored?
4. Which transitions actually ran, including skipped or retried work?
5. Which artifacts were produced, with sizes and digests?
6. Which checks passed, failed, or were not run?
7. Which model-selection events occurred?
8. What claim is supported, on which rows, under which assumptions?

Secrets and personal data should not be copied into manifests. Record safe identifiers or digests and access-controlled provenance references. Reproducibility does not override privacy or security.

## Exercises

1. Explain why equal initial seeds do not guarantee equal training trajectories.
2. Classify a fitted feature mean as parameter, optimizer state, architectural state, random state, or preprocessing state.
3. Show numerically how fitting standardization on all rows leaks the held-out value in the worked example.
4. Give two split strategies for repeated measurements from people and explain which independence failure each prevents.
5. State the difference among bitwise replay, numerical replay, and statistical replication.
6. Prove restart equivalence under the three stated assumptions.
7. Construct a checkpoint omission that leaves weights equal at restart but changes the next update.
8. Explain why storing only a seed is insufficient after 500 random draws.
9. A metric averages batch losses $2$ over 2 cases and $1$ over 8 cases. Compute the incorrect equal-batch average and correct case-weighted average.
10. Give a mixed-tolerance test for expected $1000$ and observed $1000.02$ with $atol=0.001$, $rtol=0.00001$.
11. Explain the four-significant-digit reduction discrepancy for $10^{4},1,-10^{4}$.
12. A validation set chooses among 30 epochs. Is the returned model independent of validation rows? Explain.
13. Why can restoring best weights but last-step running statistics create an invalid artifact?
14. Classify each event: a future feature, a `NaN` after exponentiation, and a partial checkpoint file.
15. Design an atomic checkpoint acceptance protocol using a schema and digest.
16. Specify a restart test that distinguishes trajectory replay from mere final-metric agreement.

## Full solutions

1. A seed only initializes one generator under one algorithm. Different draw counts, stream sharing, batch orders, parallel schedules, floating reductions, mutable state, software, or hardware can change later transitions. Equal complete initial states and deterministic transitions are the relevant condition.
2. It is fitted preprocessing state. It was learned from designated rows and must be frozen and restored with the pipeline. Calling it a model parameter would obscure its separate data-fitting scope.
3. Training-only statistics give mean $1$, scale $1$, and held-out transformed value $99$. All-row statistics give mean $34$, scale about $46.676$, and held-out value about $1.414$. The test value changed the map applied to itself and the training rows.
4. Assign all rows from one person to the same split to prevent identity dependence across splits. For time-indexed prediction, split chronologically with a gap when needed to prevent future observations or overlapping windows from informing earlier evaluation. Both may be required simultaneously.
5. Bitwise replay requires identical serialized results; numerical replay allows declared finite-precision differences at named states; statistical replication asks whether an aggregate finding recurs across independent runs or samples. The third is not a relaxed form of the first two.
6. Base case: states agree at checkpoint $k$. If states agree at $t$ and future batch identifiers and semantics agree, deterministic $T$ returns the same metric and state at $t+1$. Induction proves equality for all later transitions.
7. Omit momentum $v_{k}$. On restart set it to zero while keeping $\theta _{k}$ equal. A momentum update uses $v_{k+1}=\beta v_{k}+g_{k}$, so the next parameter step differs unless the omitted contribution happens to vanish.
8. The generator state after 500 draws depends on the algorithm and exact consumption sequence. Restarting from the initial seed repeats draw 1, not draw 501. Store the current state or a semantic counter key that directly identifies the next draw.
9. Equal-batch average is $(2+1)/2=1.5$. The numerator totals are $2\cdot 2+1\cdot 8=12$ over $10$ cases, so the correct case mean is $1.2$.
10. The permitted error is $0.001+0.00001\cdot 1000.02\approx 0.0110002$. The actual error is $0.02$, so the comparison fails. The tolerance should not be widened merely because this result failed.
11. Adding $1$ to $10^{4}$ rounds back to $10^{4}$, then the opposite gives zero. Adding $10^{4}$ and $-10^{4}$ first gives zero, then adding $1$ gives one. Floating rounding makes the reduction order observable.
12. No. The epoch is an adaptive function of validation scores, so validation rows influence the returned weights or checkpoint. They remain useful selection evidence but are not untouched final-test data.
13. The pair may never have co-occurred. Deployment output can depend on running statistics, so weights from epoch $k$ plus state from epoch $T$ define a hybrid program with no recorded validation score.
14. A future feature is a contract failure; overflow producing `NaN` is a numerical failure, perhaps rooted in an unstable formula; a partial checkpoint is an infrastructure/state-integrity failure. The classification determines different responses.
15. Serialize all state into a temporary artifact; validate required fields, shapes, data/config identities, and next-step semantics; compute and store a digest; read it back and revalidate; then atomically commit the verified artifact and update a small pointer. On recovery, accept only artifacts whose schema and recomputed digest match.
16. Run $K$ steps, save full state, then continue $M$ steps while recording every batch key, state digest, loss numerator/denominator, and selected parameter probes. Independently restore at $K$ and rerun the same $M$ transitions. Compare each intermediate record under the declared replay relation. A matching final metric alone fails because divergent trajectories can end at similar values.

## Project checkpoint: a restartable reference trainer

Build a dependency-free trainer for ridge regression or two-class logistic regression using fixed arrays. The project is complete only when it supplies executable verification, not merely pseudocode.

Required components:

1. A data contract with stable row IDs, an immutable snapshot digest, and a group- or time-aware split.
2. A train-only standardizer with serialized fitted state.
3. A named counter or serializable random stream for shuffling.
4. Mean-loss gradients whose numerator and denominator are both logged.
5. One stateful optimizer (momentum is sufficient) and a predeclared schedule.
6. A versioned checkpoint containing every field listed in this chapter.
7. Atomic write simulation: interrupt before commit and prove the earlier checkpoint remains loadable.
8. Restart equivalence: compare uninterrupted and resumed traces at every step.
9. Failure injections for a changed split digest, missing momentum, wrong next-step index, and corrupted bytes; every one must be rejected or create a deliberate mismatch.
10. A final metric ledger separating training, selection, and untouched evaluation rows.

Use one bitwise fixture if the local arithmetic path permits it and one mixed-tolerance fixture. Report exact commands or entry functions, fixed inputs, expected state digests or numeric outputs, observed outputs, tolerances, and failure messages. Then run at least five independently keyed initializations and report the complete result table without selecting the best seed. The result demonstrates replay of this trainer and variability on this fixed dataset; it does not prove population performance.
