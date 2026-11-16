# Calculus III synthesis project: instrument a rotating flow

**Role:** a sustained modeling investigation after the cumulative exam. Budget two sessions: one for prediction and calculations, one for revision and communication. The project connects local derivative information, path measurements, multiple integration, holes, and closed-surface flux. Its measurements and questions are original teaching data. You may use the Rust/WASM notebook for repeatable numerical checks; the final claims need mathematical arguments.

## The model and the two instruments

A cylindrical test chamber occupies \(\rho\leq r\leq R\), \(0\leq z\leq H\), with \(0<\rho<R\). Distances are metres and the fluid velocity field is

$$
\mathbf V(x,y,z)=\left(-\frac{\omega y}{2}-\frac{\Gamma y}{2\pi(x^2+y^2)},\quad
\frac{\omega x}{2}+\frac{\Gamma x}{2\pi(x^2+y^2)},\quad kz\right).
$$

Here \(\omega\) and \(k\) have units \(s^{-1}\), while \(\Gamma\) has units \(m^2s^{-1}\). The model is defined for \(r>0\). A horizontal loop sensor measures signed circulation along a counterclockwise circle at height \(z=H\); a chamber sensor measures net outward volume flow through the **entire closed annular-cylinder boundary**. The horizontal field has a smooth rotational part and a vortex contribution around the excluded axis. The vertical component expands or contracts flow when \(k\ne0\).

Before calculating, sketch the three-dimensional chamber and label four surface pieces: outer cylindrical wall, inner cylindrical wall, top annular cap, bottom annular cap. At the inner wall the chamber's outward normal points toward the axis. Also sketch two top sensor loops with radii \(s_1,s_2\) satisfying \(\rho<s_1<s_2<R\). Predict which readings depend on loop radius and which depend on chamber height.

## Derive the measurements

On a radius-\(s\) circle, parameterize \(\mathbf c(t)=(s\cos t,s\sin t,H)\). The dot product with \(\mathbf c'(t)=(-s\sin t,s\cos t,0)\) is \(\omega s^2/2+\Gamma/(2\pi)\). Hence

$$
C(s)=\oint_{|\mathbf r|=s}\mathbf V\cdot d\mathbf r
=\omega\pi s^2+\Gamma.
$$

The vertical component makes no contribution because the loop tangent has zero \(z\)-component. The horizontal vortex has curl zero away from the axis but still contributes \(\Gamma\) around any loop that winds once counterclockwise around it. Its magnitude changes with radius even though its circulation does not.

Away from the axis, divergence is \(k\). The volume of the annular chamber is \(\pi(R^2-\rho^2)H\), so the outward closed-surface flux is

$$
Q=k\pi(R^2-\rho^2)H.
$$

This is also clear patch by patch: the horizontal components are tangent to both cylindrical walls, so their normal fluxes vanish. The vertical part has top value \(kH\), producing top flux \(kH\pi(R^2-\rho^2)\), and bottom value zero. This direct calculation verifies the divergence theorem and makes the chamber boundary concrete. The theorem is applicable because \(\rho>0\) keeps the entire closed solid inside the field's smooth domain.

## Use two readings to identify the model

Suppose \(s_1=1\,m\), \(s_2=2\,m\), and measured circulations are \(C(s_1)=5\pi\,m^2/s\) and \(C(s_2)=11\pi\,m^2/s\). Subtract the equations before solving:

$$
\omega=\frac{C(s_2)-C(s_1)}{\pi(s_2^2-s_1^2)}=2\,s^{-1},\qquad
\Gamma=C(s_1)-\omega\pi s_1^2=3\pi\,m^2/s.
$$

One circulation reading cannot identify both parameters; infinitely many pairs \((\omega,\Gamma)\) fit it. Two distinct radii separate the area-dependent and winding-dependent parts. If the radii nearly coincide, small reading errors can cause a large error in the inferred \(\omega\), because the denominator \(s_2^2-s_1^2\) is small. This is an experimental-design reason to separate the sensors where chamber geometry permits.

For \(\rho=0.5\,m\), \(R=2.5\,m\), \(H=3\,m\), and \(k=0.4\,s^{-1}\), the closed-boundary flux is \(Q=7.2\pi\,m^3/s\). Both centered loop radii lie inside this chamber. An off-axis loop must also remain inside the annulus; its entire disk must avoid the axis before Green can justify zero vortex circulation.

```notebook
# Rerun after changing a measurement or parameter.
let omega = 2;
let Gamma = 3*pi;
let inner = 0.5;
let outer = 2.5;
let height = 3;
let k = 0.4;
fn circulation(x) = omega*pi*x^2 + Gamma;
show circulation(1);
show circulation(2);
table circulation from 0.5 to 2 count 4;
plot circulation from 0.5 to 2;
show k*pi*(outer^2-inner^2)*height;
```

The plot shows the formula \(C(s)\) for centered loops with positive radius. Its smooth curve does not represent fluid trajectories or certify the field at the missing axis. Change \(\omega\), \(\Gamma\), and \(k\) independently and record which outputs change. Then predict the result for an off-axis loop whose enclosed disk avoids the axis before changing the model: Green applies on that disk, so its vortex contribution is **zero** despite the local field being nonzero on its boundary. The smooth part contributes \(\omega\) times the loop's oriented area.

```exercise
{"id":"calc3-project-identify","type":"numeric","prompt":"The two centered loop readings are 5π and 11π at radii 1 and 2. What is ω in inverse seconds? Enter its numerical value.","answer":2,"tolerance":0,"hints":["Subtract the two readings so Γ cancels.","Divide 6π by π(2²−1²)."],"feedback":"Subtracting removes the radius-independent vortex circulation; one reading alone cannot separate ω and Γ."}
```

```exercise
{"id":"calc3-project-report","type":"written","prompt":"Submit your project report: derive both sensor formulas, infer ω and Γ from the data, calculate closed-boundary flux for ρ=0.5, R=2.5, H=3, k=0.4, and redesign one loop off-axis so its disk avoids the vortex. State the changed prediction, all units, the needed theorem hypotheses, and one source of measurement sensitivity.","hints":["Parameterize the centered loop and list all four chamber boundary pieces before using Green or Gauss.","An off-axis disk that avoids r=0 has a smooth field on a neighborhood; its vortex curl vanishes there. Keep its area separate from its location."],"rubric":["Derives C(s)=ωπs²+Γ with counterclockwise orientation and units m²/s","Derives Q=kπ(R²−ρ²)H with outward closed boundary and units m³/s","Finds ω=2 s⁻¹, Γ=3π m²/s, Q=7.2π m³/s","Explains why the field is smooth on the annular solid but singular on the excluded axis","Predicts vortex circulation zero for a loop whose filled disk avoids the axis, while smooth contribution is ω times its area","Identifies a concrete sensitivity such as nearly equal sensor radii and justifies it from the denominator"],"solution":"For a centered radius-s counterclockwise loop, V(c)·c′=ωs²/2+Γ/(2π), so C(s)=ωπs²+Γ m²/s. The annular chamber excludes the singular axis; its divergence is k and volume π(R²−ρ²)H, giving outward flux Q=kπ(R²−ρ²)H m³/s. The wall fluxes vanish, the top contributes Q, and the bottom zero. Subtracting 11π−5π=6π=ωπ(4−1) gives ω=2 s⁻¹; then Γ=5π−2π=3π m²/s. With the supplied chamber dimensions, Q=0.4π(6.25−0.25)3=7.2π m³/s. A radius-0.25 loop centered at (1.5,0) has a disk entirely away from the axis; Green gives zero vortex circulation because vortex curl is zero on a neighborhood of that disk. Its smooth contribution is ωπ(0.25)²=π/8 m²/s. If the two centered sensor radii are nearly equal, their squared-radius difference is small, amplifying errors when solving for ω."}
```

## Extension: challenge the model

The project assumes steady, smooth flow on the annular chamber and exact circular loops. If \(\omega\) varies with radius, the two-reading formula can fit two measurements but need not predict a third. Design a third sensor radius, make a prediction under the constant-\(\omega\) model, and state what a disagreement would rule out. If \(k\) varies with height, the top flux becomes \(k(H)H\pi(R^2-\rho^2)\) only when the vertical velocity model remains \(k(z)z\); the divergence is then \(k(z)+zk'(z)\). State this distinction before treating a fitted constant as physical truth. A numerical plot helps choose tests; it does not prove the model assumptions.
