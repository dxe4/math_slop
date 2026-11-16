var e=`---
parent_id: book-algebraic-analytic-number-theory
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions

All number fields are finite extensions of the rationals. Their full integer
ring is O-K; an order is a possibly smaller full-rank integer subring.
The power-basis index is never assumed one merely because its generator is
integral. D-K is the field discriminant, while an order discriminant includes
the square of its index. Rational primes are lowercase p; prime ideals
are distinguished typographically or explicitly called ideals in prose.

N-I is the positive index norm of a nonzero integral ideal. For a
nonzero principal ideal it is the absolute field norm. Fractional ideal norms
are positive rational values defined by clearing denominators. The zero ideal
is outside the invertible ideal group and has no finite-index norm.

Prime valuations are normalized to uniformizer value one. The absolute value
used to extend a base local field can differ by a power from the
global normalization. In the product formula and heights, use N-q to
minus v-q at a finite place, the ordinary modulus at a real
place and the squared modulus at one representative of each complex pair.
The product is one on every nonzero field element. Heights divide the
logarithmic sum by the field degree. The naive point height here is the
x-height, with value zero at O; its doubling law has bounded error.

For Minkowski geometry, real and imaginary parts of each complex embedding
are ordinary coordinates. The integer-ring covolume is therefore two to
minus r-two times square root absolute D-K. If another source scales
both complex coordinates by square root two, its volume formulas must be
converted consistently. Logarithmic unit coordinates use twice the logarithm
of a complex modulus, placing them in the coordinate-sum-zero hyperplane.

The prime-count functions count inputs at most x. Theta counts log p
once per prime and psi once per positive prime-power occurrence. An
Euler product starts in its proved absolute half-plane; continuation of its
function does not continue ordinary convergence of that product.

For modular forms q means exp(two pi i z). The full-level weight-k
completion uses Gamma(s) times (two pi) to minus s and reflects
s to k minus s. The zeta theta completion instead uses Gamma(s/2)
and pi to minus s-over-two, reflecting s to one minus s.
These are different normalizations. D in the modular chapter is defined
from E-four and E-six; an eta-product identity is not assumed.

Discrete logarithms lie in the range from zero inclusive to the exact
subgroup order exclusive. Claimed group-operation bounds distinguish table lookup,
bit arithmetic and memory. A proper gcd certifies a factor; it does
not certify primality of every resulting cofactor.
`;export{e as default};