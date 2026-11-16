
# Notation and Certificate Contract

$x$ may be continuous, integer or binary only as explicitly declared. $P$ denotes a polyhedron, $\operatorname{conv}(S)$ a convex hull, and $P\cap\mathbb Z^n$ its integer points. The integer hull is their convex hull; it need not equal the original relaxation. A cut is a valid inequality for the retained feasible integer set, not a constraint chosen merely because it improves one computed answer.

For minimization, use $L$ for a valid global lower bound and $U$ for an incumbent value, with $L\le f^*\le U$. When the source maximizes, it states the reversed roles explicitly. An absolute gap has objective units. A relative gap requires a denominator convention robust near zero and across sign changes. Integrality-based rounding of a bound requires an actual objective lattice, not a vaguely almost-integer floating value.

Node and region records declare their domains, parent partition, relaxation, arithmetic model, incumbent and closure reason. Exact rational or outward-rounded evidence is distinct from an ordinary floating residual. Elementary interval construction is taught in [Verified and Interval Computation](../numerical-mathematics-error-algorithms/verified-interval-computation.md); this book uses valid enclosures as supplied certificate components.

The states infeasible, unbounded, optimal, bounded-but-unresolved, and solver failure name different conclusions. A proof log supports only the conclusion justified by its retained witnesses and coverage. Original chapter IDs remain aliases even where two older software/capstone readings become supporting matter for the certificate chapter.
