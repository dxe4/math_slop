# Algorithms and pseudocode {#sec-algorithms}

## Conventions

All algorithms below accept positive mathematical integers and use exact
arithmetic. Array indices and interval endpoints are explicit. A production
fixed-width implementation needs checked operations before it can refine these
algorithms.

## Forward iteration

The unaccelerated step:

```text
C_STEP(n):
    require INTEGER(n) and n > 0
    if n mod 2 = 0:
        return n / 2
    return 3*n + 1
```

The shortcut step:

```text
S_STEP(n):
    require INTEGER(n) and n > 0
    if n mod 2 = 0:
        return n / 2
    return (3*n + 1) / 2
```

The odd-to-odd step returns both the next value and the division exponent:

```text
U_STEP(n):
    require INTEGER(n), n > 0, and n mod 2 = 1
    m <- 3*n + 1
    a <- 0
    while m mod 2 = 0:
        m <- m / 2
        a <- a + 1
    ensure a >= 1 and m mod 2 = 1
    return (m, a)
```

Expanding one returned pair $(m,a)$ should reproduce
$n\to3n+1\to\cdots\to m$ under $C$ with one odd step followed by $a$ divisions.
This is a useful cross-implementation property.

## Stopping time, total stopping time, and peak

```text
ORBIT_SUMMARY(start, step_limit):
    require INTEGER(start), start > 0
    require INTEGER(step_limit), step_limit >= 0
    n <- start
    steps <- 0
    peak <- start
    first_descent <- NONE

    while n != 1 and steps < step_limit:
        n <- C_STEP(n)
        steps <- steps + 1
        peak <- max(peak, n)
        if first_descent is NONE and n < start:
            first_descent <- steps

    if n = 1:
        return {
            status: REACHED_1,
            total_stopping_time: steps,
            stopping_time: first_descent,
            peak: peak,
            last: 1
        }
    return {
        status: STEP_LIMIT,
        total_stopping_time: NONE,
        stopping_time: first_descent,
        peak: peak,
        last: n,
        steps_examined: steps
    }
```

Start 1 is a deliberate edge case: total stopping time is zero, while first
descent is undefined under the $n>1$ definition.

## Parity-vector affine reconstruction

Represent an affine shortcut iterate as

$$
S^j(n)=\frac{pn+q}{2^j}.
$$

The following procedure composes a formal word without floating point:

```text
AFFINE_FROM_WORD(bits):
    p <- 1
    q <- 0
    depth <- 0
    for bit in bits:
        require bit in {0, 1}
        if bit = 1:
            p <- 3*p
            q <- 3*q + 2^depth
        depth <- depth + 1
    return (p, q, depth)
```

Why does the odd update add $2^{\text{depth}}$? Before the new division, the
current denominator is $2^{\text{depth}}$, so adding 1 becomes adding that
denominator to the numerator. The even branch changes only the denominator.

To find the unique realizing residue modulo $2^k$, test each residue in a small
reference implementation or solve branch congruences iteratively. Enumeration is
adequate for certificate checking at small $k$; a production generator uses
bitwise recurrence.

## Residue-sieve enumeration

This pedagogical version separates representative discovery from uniform proof:

```text
CLASSIFY_CLASS(residue, k):
    require 0 <= residue < 2^k
    start <- residue if residue > 0 else 2^k
    n <- start
    bits <- empty list

    for j from 1 through k:
        append (n mod 2) to bits
        n <- S_STEP(n)
        (p, q, depth) <- AFFINE_FROM_WORD(bits)

        # Verify the representative followed the formal word.
        ensure 2^depth * n = p*start + q

        if p < 2^depth and p*start + q < 2^depth*start:
            return UNIFORM_DESCENT(bits, p, q, depth, start)

    return UNRESOLVED(bits)
```

The use of the smallest positive representative makes the slope argument uniform
for larger lifts. A checker should independently replay the word and inequality.
If one searches beyond $k$ steps, the original class must be refined because
later parity is not fixed modulo $2^k$.

## Inverse-layer construction

```text
C_PREDECESSORS(m):
    require INTEGER(m) and m > 0
    result <- {2*m}
    if m mod 6 = 4:
        result <- result union {(m-1)/3}
    return result

INVERSE_LAYERS(depth_limit):
    roots <- {1, 2, 4}
    seen <- roots
    frontier <- roots
    layers <- [roots]
    edges <- {(1,4), (4,2), (2,1)}

    repeat depth_limit times:
        next_frontier <- empty set
        for target in frontier:
            for source in C_PREDECESSORS(target):
                edges <- edges union {(source, target)}
                if source not in seen:
                    seen <- seen union {source}
                    next_frontier <- next_frontier union {source}
        append next_frontier to layers
        frontier <- next_frontier

    return (layers, edges)
```

Keeping all edges and keeping one discovery edge are different output modes. The
figure generator uses a finite layout and states its duplicate policy.

## Finite-range verification

```text
VERIFY_RANGE(exclusive_upper_bound):
    require INTEGER(exclusive_upper_bound)
    require exclusive_upper_bound >= 2
    certified <- boolean array of length exclusive_upper_bound
    certified[1] <- TRUE

    for start from 2 through exclusive_upper_bound - 1:
        n <- start
        while n >= start:
            n <- C_STEP(n)
        ensure certified[n] = TRUE
        certified[start] <- TRUE

    ensure every certified[1:exclusive_upper_bound] is TRUE
    return VERIFIED_HALF_OPEN_RANGE(1, exclusive_upper_bound)
```

The loop ends for the ranges used in this book because they were independently
tested; termination for arbitrary input is precisely the unresolved issue. A
real verifier needs a resource policy that returns unresolved rather than
pretending termination is guaranteed. Processing in increasing order makes
`certified[n]` a downward dependency.

## Interval coverage audit

Sort half-open worker intervals by lower endpoint. Require the first lower
endpoint to equal the global lower bound, each interval to have positive length,
each next lower endpoint to equal the previous upper endpoint, and the final
upper endpoint to equal the global upper bound. Then separately require a valid
completion record and hash for each interval. Coverage of filenames is not
coverage of integers unless the manifest contents are checked.

## No-adjacent-one coefficient recurrence

```text
NO_ADJACENT_COUNTS(max_length):
    require INTEGER(max_length), max_length >= 0
    rows[0] <- [1]
    if max_length = 0: return rows
    rows[1] <- [1, 1]

    for n from 2 through max_length:
        # P_n(u) = P_(n-1)(u) + u P_(n-2)(u)
        row <- COPY(rows[n-1])
        ADD_SHIFTED(row, rows[n-2], shift=1)
        rows[n] <- row

    return rows
```

Every coefficient is an exact integer. A checker compares small rows with
$\binom{n-k+1}{k}$ and verifies that row sums satisfy the Fibonacci recurrence.

## Rational drift checker

```text
CHECK_DRIFT(states, target, P, V, delta):
    require all entries are exact rationals
    require delta > 0 and V[state] >= 0

    for state in states:
        require P[state, j] >= 0 for every j
        require SUM_j P[state, j] = 1
        if state not in target:
            next_mean <- SUM_j P[state, j] * V[j]
            require next_mean <= V[state] - delta

    return CERTIFIED_EXPECTED_HITTING_BOUND(V / delta)
```

The semantic checker must also confirm that the matrix represents the declared
probability space. Rational inequalities alone certify the finite table.

## Fixed-horizon elimination producer

```text
ELIMINATE_SHORTCUT_HORIZON(h):
    require INTEGER(h), h >= 0
    output <- empty list

    for word in ALL_BINARY_WORDS(h):
        (p, q, depth) <- AFFINE_FROM_WORD(word)
        residue <- UNIQUE_REALIZING_RESIDUE(word, modulus=2^h)

        if 2^h <= p:
            solution <- NO_POSITIVE_DESCENT
        else:
            threshold <- FLOOR(q / (2^h - p)) + 1
            solution <- RESIDUE_TAIL(residue, 2^h, threshold)

        append (word, residue, p, q, solution) to output

    require every word occurs once
    return output
```

The checker recomputes affine coefficients and residues. Strict integer
inequalities use floor division, not floating point.

## Rational logarithm enclosure

```text
LOG_BOUNDS_INTEGER(x, depth):
    require INTEGER(x), x > 1
    require INTEGER(depth), depth >= 0
    z <- RATIONAL(x - 1, x + 1)
    lower <- 0

    for j from 0 through depth:
        lower <- lower + 2 * z^(2*j + 1) / (2*j + 1)

    remainder <- 2 * z^(2*depth + 3)
                 / ((2*depth + 3) * (1 - z^2))
    return [lower, lower + remainder]
```

To enclose $A\log2-r\log3$, combine the lower bound for the positive term with
the upper bound for the subtracted term, and vice versa. Preserve rational
endpoints in the certificate.

## Algorithmic pitfalls

- Do not use floating-point logarithms to decide an exact descent inequality.
- Do not treat a step cap as a successful completion.
- Do not cache active paths as certified paths.
- Do not forget that zero represents a valid total stopping time for start 1.
- Do not mix inclusive and exclusive upper bounds.
- Do not generate a lookup table under $S$ and consume it under $C$.
- Do not suppress a duplicate inverse node without deciding whether its extra
  edge matters.
