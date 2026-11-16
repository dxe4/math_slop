(* Polynomial conditions and actual witnesses.
   OPTIONAL COMPANION: NOT EXECUTED in the authoring environment.
   Expected mathematical statements are proved in SOURCES.md.
   Run in a fresh kernel and retain the labeled report and any messages.
   Get["path/to/witnesses.wl"] returns the report and also prints it.
   This file uses current native built-ins and no add-on packages. *)

ClearAll[u, v, a, b, x, y, f, g, sylvester, gb, existenceReal,
  existenceComplex, changedReal, changedComplex, witnessReport];

f = a u^2 + u + b;
g = a u + 1;
sylvester = {{a, 1, b}, {a, 1, 0}, {0, a, 1}};

(* Preserve the parameter strata: compute in Q[u,a,b], not Q(a,b)[u].
   A lex basis generates the same ideal as {b, a u + 1}; list order and
   presentation are not part of the mathematical claim. *)
gb = GroebnerBasis[{f, g}, {u, a, b},
  MonomialOrder -> Lexicographic, CoefficientDomain -> Rationals];

(* Equations-only elimination gives polynomial conditions. The exact
   existential statements include the missing inequation a != 0. *)
existenceReal = Resolve[Exists[u, f == 0 && g == 0], Reals];
existenceComplex = Resolve[Exists[u, f == 0 && g == 0], Complexes];

(* CHANGED WRITTEN TASK: derive the two-field projection independently
   before evaluating these optional checks. This task is not a UI preset. *)
changedReal = Resolve[
  Exists[{u, v}, u^2 + v^2 == x && u v == y], Reals];
changedComplex = Resolve[
  Exists[{u, v}, u^2 + v^2 == x && u v == y], Complexes];

witnessReport = <|
  "Source status at publication" -> "Not executed in the authoring environment",
  "Kernel version for this execution" -> $Version,
  "Original polynomials" -> {f, g},
  "Identity f-u*g-b, expected zero" -> Expand[f - u g - b],
  "Generic Sylvester determinant" -> Factor[Det[sylvester]],
  "Generic resultant" -> Factor[Resultant[f, g, u]],
  "Lex basis in Q[u,a,b]" -> gb,
  "Remainder of b against that basis, expected zero" ->
    PolynomialReduce[b, gb, {u, a, b}, MonomialOrder -> Lexicographic][[2]],
  "Elimination basis in Q[a,b]" ->
    GroebnerBasis[{f, g}, {a, b}, {u},
      MonomialOrder -> Lexicographic, CoefficientDomain -> Rationals],
  "Equations-only Eliminate" -> Eliminate[f == 0 && g == 0, u],
  "Exact existence over Reals" -> existenceReal,
  "Exact existence over Complexes" -> existenceComplex,
  "Real classification equivalence, expected True" ->
    Resolve[ForAll[{a, b},
      Equivalent[Exists[u, f == 0 && g == 0], b == 0 && a != 0]], Reals],
  "Complex classification equivalence, expected True" ->
    Resolve[ForAll[{a, b},
      Equivalent[Exists[u, f == 0 && g == 0], b == 0 && a != 0]], Complexes],
  "Original substitutions for a correct witness" ->
    ({f, g} /. {a -> 2/3, b -> 0, u -> -3/2}),
  "Original substitutions for an incorrect witness" ->
    ({f, g} /. {a -> 2/3, b -> 0, u -> 3/2}),
  "Actual polynomials at a=0" -> ({f, g} /. a -> 0),
  "Actual specialized resultant at a=0, expected one" ->
    Resultant[f /. a -> 0, g /. a -> 0, u],
  "Generic determinant specialized at a=0, expected zero" ->
    (Factor[Det[sylvester]] /. a -> 0),
  "Changed real projection" -> changedReal,
  "Changed complex projection" -> changedComplex,
  "Changed real classification equivalence, expected True" ->
    Resolve[ForAll[{x, y},
      Equivalent[Exists[{u, v}, u^2 + v^2 == x && u v == y],
        x + 2 y >= 0 && x - 2 y >= 0]], Reals],
  "Changed complex existence, expected True" ->
    Resolve[ForAll[{x, y},
      Exists[{u, v}, u^2 + v^2 == x && u v == y]], Complexes],
  "Changed complex witness substitution, expected {1,1}" ->
    FullSimplify[{u^2 + v^2, u v} /.
      {u -> (Sqrt[3] + I)/2, v -> (Sqrt[3] - I)/2}]
|>;

(* Printing makes command-line execution retain every labeled value too.
   Messages are not suppressed. Get also receives the final association. *)
Print[witnessReport];
witnessReport
