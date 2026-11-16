# Editable mathematical experiments

Each `.math` file is a complete scene for Lucent. Open it in the course reader's
scene editor, change its code, or adjust its declared parameters. The same
source renders to a standalone SVG with the Rust command-line tool:

```sh
python3 scripts/dependency_policy.py cargo -- run -p mathviz-cli -- examples/projection.math projection.svg angle=0.8 vx=2 vy=1
```

The parameter overrides are optional. The dependency-policy wrapper checks the
14-day minimum release age before allowing a Cargo operation.

| Experiment | What to change | A question to answer after exploring |
| --- | --- | --- |
| [Derivative](derivative.math) | Base point and secant step | Why is the secant slope `2*a+h` and the derivative `2*a`? |
| [Integration](integration.math) | Number of rectangles | How does the approximation compare with the exact integral `8/3`? |
| [Epsilon and delta](epsilon_delta.math) | Proposed input and output neighborhoods | Which delta works for every input in the punctured neighborhood? |
| [Discontinuity](discontinuity.math) | The proposed neighborhoods | What prevents the two one-sided limits from agreeing? |
| [Oscillation](oscillation.math) | View the oscillations near zero | Which two sequences give different limiting values? |
| [Shear](matrix_shear.math) | Shear amount and input-vector components | Why does this transformation preserve area? |
| [Rotation](matrix_rotation.math) | Angle, vector length, or playback | How do the matrix columns encode a rotation? |
| [Singular matrix](singular_matrix.math) | The vertical scale through zero | What is the kernel at the collapsed frame? |
| [Span](span.math) | Both coefficients and the second direction | When can linear combinations reach every point in the plane? |
| [Projection](projection.math) | Direction and input-vector components | Why is the projected point the nearest point on the line? |
| [Determinant](determinant_area.math) | All four matrix entries | Why does swapping columns reverse the sign of the determinant? |
| [Eigenvectors](eigenvectors.math) | Matrix parameter and input angle | Which directions stay on their original line, and why? |
| [Circle](parametric_circle.math) | Radius, center, angle, or playback | Why is the velocity perpendicular to the radius? |
| [Rolling wheel](trochoid.math) | Wheel radius, pen offset, and playback | When does the pen move backward, and when does a cusp form? |
| [Harmonic oscillator](harmonic_oscillator.math) | Frequency, damping, initial state, and duration | What changes from conserved energy to decreasing energy? |
| [Pendulum](pendulum.math) | Angle, speed, damping, and duration | Which energy threshold separates oscillation from rotation? |
| [Competition](competition.math) | Interaction coefficients, growth rate, and initial populations | When does coexistence give way to competitive exclusion? |
| [Contours](contours.math) | Level and vertical stretch of a scalar field | How do the analytic axis intercepts explain the two nested curves? |

Start by predicting what should happen. After changing a control, explain the
observation using a calculation, theorem, or model assumption. The comments in
each scene supply prompts and relevant mathematical caveats.

Geometry scenes explicitly use `coordinates equal;` so one unit has the same
display length on both axes. A frame can crop a trajectory that travels beyond
its domain and range; increase the literal viewport bounds to follow it.

For a numerical trajectory, increasing `steps` reduces the fixed RK4 step size
at a fixed integration time. Compare results at two resolutions and use a known
invariant when available. An apparent pattern in sampled output is a starting
point for mathematical explanation, not a proof.

See the [language reference and simulation tutorial](../docs/language.md) to
build another experiment from these pieces.
