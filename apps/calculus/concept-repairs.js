// Curated fallback destinations for the five original checks in each chapter.
// Each row is [one-based lesson, one-based chapter-wide written problem, editorial rationale, optional problem chapter].
// Authored question.repair always takes priority over these fallbacks.
export const conceptRepairFallbacks={
  '01':[
    [3,10,'A square-root denominator needs both real input and a nonzero value.'],
    [6,25,'A restricted square branch makes the inverse single valued.'],
    [4,15,'Composition applies the inner rule first and carries its domain.'],
    [3,13,'Cancelling a factor does not restore an excluded input.'],
    [5,21,'One counterexample overturns a universal claim.'],
  ],
  '02':[
    [3,11,'Unit-circle coordinates fix the sine value and quadrant.'],
    [4,19,'A trigonometric identity must retain its domain conditions.'],
    [5,21,'Polar-to-Cartesian coordinates use the cosine projection.'],
    [3,33,'Radian and degree derivatives differ by a conversion factor.'],
    [5,22,'Only quantities with compatible units can be added.'],
  ],
  '03':[
    [3,17,'Relative error divides by the exact target, so zero is exceptional.'],
    [2,7,'Endpoint-inclusive sampling exposes loop and count boundaries.'],
    [4,20,'Finite matching samples cannot prove an identity.'],
    [4,27,'A centered difference uses both sides and divides by their separation.', '06'],
    [4,23,'Subtractive cancellation can dominate a small-step estimate.'],
  ],
  '04':[
    [5,24,'Continuity requires the assigned value to match the nearby limit.'],
    [2,4,'A zero-over-zero substitution calls for algebra before a limit.'],
    [1,1,'Changing a point value leaves its punctured-neighborhood limit intact.'],
    [5,23,'The intermediate value theorem needs continuity throughout the interval.'],
    [1,2,'Disagreeing one-sided limits rule out a two-sided limit.'],
  ],
  '05':[
    [2,6,'The difference quotient gives the slope at the named input.'],
    [4,31,'A finite derivative forces continuity at its point.'],
    [1,1,'Position divided by time yields velocity units.'],
    [4,15,'Unequal one-sided slopes defeat differentiability at a corner.'],
    [3,12,'A tangent line is a local approximation with a measurable error.'],
  ],
  '06':[
    [2,9,'The inner square contributes its derivative in a trig composition.'],
    [2,10,'A logarithmic derivative retains its real domain.'],
    [1,1,'The product rule differentiates each factor in turn.'],
    [2,31,'Nested exponentials require each inner chain factor.'],
    [5,28,'Implicit division must respect vertical tangents and zero denominators.'],
  ],
  '07':[
    [2,8,'A square-root tangent slope supports a concrete estimate.'],
    [1,1,'An area rate has area-per-time units.'],
    [2,11,'A local tangent estimate needs a neighborhood error bound.'],
    [4,21,'Cubic volume has threefold relative radius sensitivity.'],
    [2,8,'A concave-down square-root graph lies below its tangent estimate.'],
  ],
  '08':[
    [2,8,'The mean value point requires both interval regularity hypotheses.'],
    [3,13,'Derivative signs certify decreasing and increasing intervals.'],
    [4,16,'A stationary inflection has zero slope without an extremum.'],
    [1,2,'Closed-interval extrema require endpoints as well as critical points.'],
    [4,15,'A zero second derivative alone does not establish inflection.'],
  ],
  '09':[
    [3,12,'A sign bracket is reliable only under continuity.'],
    [4,19,'A Newton step subtracts function value divided by derivative.'],
    [2,7,'A global optimum requires checking feasible boundary candidates.'],
    [4,18,'Newton iterates can leave or cycle outside a bracket.'],
    [1,3,'The feasible rectangle dimensions reduce area to a quadratic objective.'],
  ],
  '10':[
    [5,26,'Signed velocity accumulates displacement, distinct from distance.'],
    [2,36,'A uniform hundred-panel sum uses width one divided by one hundred.'],
    [4,19,'Pointwise nonnegative bounds preserve integral order.'],
    [5,23,'Average value divides accumulated total by interval length.'],
    [3,13,'One tagged-sum sequence cannot establish Riemann integrability.'],
  ],
  '11':[
    [2,8,'Accumulation differentiates to the integrand at continuity points.'],
    [3,14,'An antiderivative is evaluated as upper minus lower endpoint.'],
    [1,4,'Reversing integral bounds changes orientation and sign.'],
    [4,21,'A moving upper endpoint contributes its chain derivative.'],
    [2,10,'A jump can create unequal slopes of accumulation.'],
  ],
  '12':[
    [1,3,'Substitution reverses a composite chain derivative.'],
    [2,8,'Integration by parts reverses a product derivative.'],
    [4,32,'The absolute logarithm covers both components of the nonzero real domain.'],
    [1,2,'A definite substitution must transform both endpoints.'],
    [5,24,'A valid integral need not have an elementary primitive.'],
  ],
  '13':[
    [2,31,'A disk cross-section has area pi times its squared radius.'],
    [1,4,'Upper minus lower keeps the area slice nonnegative.'],
    [4,21,'Force times displacement gives work in joules.'],
    [2,9,'A cylindrical shell multiplies circumference, height, and thickness.'],
    [5,25,'Dividing a first moment by mass yields a position.'],
  ],
  '14':[
    [3,14,'The infinite-tail p threshold is strictly above one.'],
    [4,19,'An endpoint singularity has the opposite p threshold.'],
    [1,5,'Composite Simpson panels must come in adjacent pairs.'],
    [5,23,'Symmetric cancellation cannot replace separate improper limits.'],
    [1,1,'An exact antiderivative checks quadrature on a polynomial.'],
  ],
  '15':[
    [3,15,'Terms tending to zero are necessary but insufficient for a series.'],
    [3,12,'The geometric sum uses its starting index and common ratio.'],
    [3,28,'Convergent partial sums are what make a series converge.'],
    [4,16,'Harmonic-like terms can tend to zero while the series diverges.'],
    [4,18,'The p-series threshold separates inverse roots from inverse squares.'],
  ],
  '16':[
    [2,8,'The alternating remainder needs decreasing magnitudes and uses the next term.'],
    [3,17,'Ratio limit one does not classify a series.'],
    [1,5,'Absolute convergence implies ordinary convergence.'],
    [4,18,'Conditional and absolute sums behave differently under rearrangement.'],
    [5,23,'A small next term alone supplies no general tail bound.'],
  ],
  '17':[
    [2,7,'Termwise differentiation is licensed inside the open radius.'],
    [1,3,'Power-series endpoints need independent convergence tests.'],
    [3,12,'Taylor coefficients come from derivatives at the center.'],
    [4,17,'The next derivative bounds a Taylor remainder across an interval.'],
    [5,25,'A smooth flat function can differ from its Taylor series.'],
  ],
  '18':[
    [2,7,'Parametric slope divides vertical by horizontal parameter rates.'],
    [3,13,'Speed is the Euclidean norm of coordinate velocity.'],
    [1,1,'Repeated parameter travel can retrace the same geometric circle.'],
    [4,17,'Polar area integrates half the radius squared over one angular sweep.'],
    [4,20,'A negative polar radius reverses the angular ray.'],
  ],
  '19':[
    [2,8,'A projection leaves a remainder perpendicular to its target.'],
    [6,27,'Uniform circular acceleration points inward.'],
    [5,21,'Direction can change while speed remains constant.'],
    [1,4,'Displacement length uses the Euclidean norm.'],
    [5,23,'Circle curvature is reciprocal radius.'],
  ],
  '20':[
    [3,30,'Distinct curved path values disprove a full plane limit.'],
    [6,30,'Curved approaches can escape every tested straight line.'],
    [4,20,'A partial derivative holds the other coordinate fixed.'],
    [2,7,'A level set fixes one output value.'],
    [4,18,'Partials alone cannot replace a full continuity test.'],
  ],
  '21':[
    [4,20,'Gradient components are the coordinate partial derivatives.'],
    [4,22,'The steepest unit direction aligns with a nonzero gradient.'],
    [1,2,'Differentiability requires a uniform small linearization error.'],
    [2,7,'The tangent plane uses the value and both partial slopes.'],
    [4,16,'A level-set tangent has zero first-order directional change.'],
  ],
  '22':[
    [2,26,'Positive and negative Hessian directions give a saddle.'],
    [2,6,'A degenerate Hessian needs higher-order or direct sign analysis.'],
    [3,12,'A compact-domain maximum may occur on its boundary.'],
    [4,22,'Multiplier equations identify candidates, not certified maxima.'],
    [5,34,'The scaled quadratic uses the same multiplier test; doubling it halves the safe step bound.'],
  ],
  '23':[
    [1,30,'A unit-square grid tile has area 1/n²; midpoint sums use that area as a sample weight.'],
    [2,7,'Continuity on a rectangle permits exchanging integration order.'],
    [1,3,'A constant integrand scales region area; one returns area.'],
    [3,12,'Reversed triangular bounds start at x equals y.'],
    [4,34,'Areal density times area integrates to mass in kilograms.'],
  ],
  '24':[
    [2,8,'Polar sectors need the radial Jacobian factor.'],
    [2,35,'The disk coordinate range runs from zero radius to its edge.'],
    [4,19,'A probability density must normalize to total one.'],
    [4,22,'Marginalization integrates away the other coordinate.'],
    [1,3,'Absolute determinant measures unsigned area even under reversal.'],
  ],
  '25':[
    [3,14,'A potential changes work into an endpoint difference.'],
    [2,9,'Reversing path orientation reverses vector work.'],
    [3,13,'A closed conservative loop has equal endpoint potentials.'],
    [5,23,'A puncture can preserve circulation despite equal cross-partials.'],
    [2,9,'The dot product selects the tangential field component.'],
  ],
  '26':[
    [1,1,'Green circulation accumulates planar curl.'],
    [4,18,'Outward closed-surface flux equals volume divergence.'],
    [1,31,'A simple outer boundary is positive when traversed counterclockwise.'],
    [1,6,'A singularity inside a disk breaks Green smoothness hypotheses.'],
    [3,11,'Stokes converts oriented boundary circulation to curl flux.'],
  ],
  '27':[
    [1,2,'An initial value selects a solution under local uniqueness.'],
    [4,19,'Equilibria set the logistic right-hand side to zero.'],
    [4,35,'Continuity alone does not give uniqueness for square-root rates.'],
    [2,7,'Exponential growth or decay matches a first-order initial value.'],
    [1,5,'A slope-field segment gives local direction, not a full solution.'],
  ],
  '28':[
    [1,2,'Euler advances by the current rate times the step.'],
    [5,31,'Local second-order defects accumulate to first-order global error.'],
    [3,11,'A stable decay multiplier may still reverse sign.'],
    [2,7,'Fourth-order error falls by about sixteen on halving step.'],
    [2,8,'Method comparisons should count rate evaluations per step.'],
  ],
};

export function conceptRepair(chapterId,index,question){
  if(question?.repair)return {authored:question.repair};
  const row=conceptRepairFallbacks[chapterId]?.[index];
  if(!row)return null;
  const [lesson,problem,,problemChapter=chapterId]=row;
  return {lesson,problem,problemChapter,lessonHref:`#chapter/${chapterId}/lesson/${lesson}`,problemHref:`#chapter/${problemChapter}/practice/${Math.floor((problem-1)/4)+1}/problem/${problem}`};
}
