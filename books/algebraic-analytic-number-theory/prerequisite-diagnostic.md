
# Prerequisite Diagnostic

Use these questions to locate preparation gaps. Their solutions are personal
feedback, with no automated grading or mastery claim.

1. Expand the summatory function of a Dirichlet convolution as a sum
   over positive lattice pairs. Identify its exact region before approximating.
2. An integral generator has order discriminant minus twenty-three. Prove
   its power basis is the full integer basis.
3. A monic polynomial has a simple root modulo a prime. Write the
   linear correction equation for one more p-adic digit.
4. Explain why a nonzero degree-zero principal divisor cannot be a
   nonempty effective divisor on a projective curve.
5. State why multiplying all projective coordinates by a scalar leaves
   the logarithmic height unchanged.
6. Give a known-order certificate for a generator g of order r,
   naming the factorisation information that certificate needs.

<details>
<summary>Solutions and preparation pointers</summary>

For the first, expand convolution at n over its divisors a, put b
equal to n divided by a, and obtain all positive pairs with a b
at most x. This is a bijection of finite indexing sets. Floors and
hyperbola cuts come afterward; changing the region during an approximation
would lose the exact identity.

For the second, the order discriminant equals the full field discriminant
times the square of the integer index. No square greater than one
divides twenty-three, so the index must be one. This conclusion needs
an integral primitive generator; an arbitrary rational basis is not an order.

For the third, if a-n is correct modulo p-to-n, seek a-n
plus t p-to-n. Taylor expansion modulo p-to-n-plus-one gives the residue
equation f(a-n) divided by p-to-n plus t f-prime(a-n) equal
to zero. A nonzero derivative has an inverse and selects one t.
Repeated residue roots are outside this simple-root argument.

For the fourth, the degree of an effective nonempty divisor is positive,
while a principal divisor has degree zero. Thus an effective principal
divisor of degree zero is zero. The basic degree theorem is one
of the explicitly named curve inputs of the group-law proof.

For the fifth, at each place scaling adds log of the scalar's
absolute value to the logarithm of the coordinate maximum. The sum of
those additions is zero by the product formula. No scalar is allowed
to be zero, since projective coordinates cannot all vanish.

For the sixth, verify g-to-r is the identity and, for every
distinct prime ell dividing r, verify g-to-r-over-ell is not. A
proper order divisor would divide one of those reduced exponents. The
complete prime divisor list for r is therefore part of the input
certificate, not something supplied by the power checks alone.

</details>
