var e=`# Individually owned catalog records

This directory is the authoring source for \`content/catalog.json\`. The generated
catalog preserves the application's existing contract. It is committed for the
current reader, validators and report scripts.

| Path | Owner |
| --- | --- |
| \`metadata.json\` | Catalog steward; shared version, description, license and levels |
| \`domains/<id>.json\` | Assigned taxonomy editor |
| \`topics/<id>.json\` | Assigned taxonomy editor |
| \`paths/<id>.json\` | Assigned learning-path editor |
| \`items/<id>.json\` | Assigned resource/book editor |

Each record filename must match its \`id\`. \`_order\` preserves legacy display
order and is removed during compilation. New records can omit \`_order\` and are
appended in stable ID order; no shared counter is needed. Do not change another
resource's record without an ownership assignment. Do not add proposed books
to this catalog before a commission is accepted and an honest public record
is appropriate.

\`\`\`sh
npm run assemble:catalog  # integrator generates the shared artifact
npm run check:catalog     # read-only drift check
npm run check:content     # existing structural and semantic content checks
\`\`\`

In a shared checkout, workers leave generated output to the integrator. In an
isolated clone/worktree, workers may assemble locally to test their work but
exclude the generated artifact from their submitted change set. The integrator
reassembles all accepted source changes together and runs the full check.

The root README and docs/architecture.md explain shared ownership and builds.
The [editorial standards](../../../../docs/atlas.md#editorial-and-publication-standards) define book scope.
`;export{e as default};