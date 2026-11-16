var e=`---
id: visual-lab-shape-operator-surfaces
title: "Shape Operator and Minimal-Surface Laboratory"
level: advanced-undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# Shape Operator and Minimal-Surface Laboratory

Curvature is not merely how bent a surface looks. At a regular point it is a direction-dependent measurement encoded by a linear map on the tangent plane. This laboratory connects a raw WebGL surface to the first and second fundamental forms, the shape operator, principal curvatures, Gaussian and mean curvature, Euler's normal-curvature formula, and a numerical area estimate.

[Open the runnable laboratory](#/labs?lab=visual-lab-shape-operator-surfaces)

Choose a sphere, torus, catenoid, helicoid, or monkey saddle. Drag or use the arrow keys to orbit; use the wheel or \`+\` and \`-\` to zoom; change the parameter point with labeled controls. The complete numerical table is the authoritative nonvisual alternative. If WebGL is unavailable or its context is lost, the instrument falls back first to a Canvas wireframe and then to the table without hiding the mathematics.

## The two fundamental forms

For a parametrization $r(u,v)$, the tangent vectors $r_u$ and $r_v$ give

$I = E du^{2} + 2F du dv + G dv^{2}$,

where $E=r_u\\cdot r_u$, $F=r_u\\cdot r_v$, and $G=r_v\\cdot r_v$. The determinant $EG-F^{2}$ is positive at a regular parameter point and its square root is the local area scale.

After choosing a unit normal $N$, second derivatives give

$II = e du^{2} + 2f du dv + g dv^{2}$,

with $e=N\\cdot r_uu$, $f=N\\cdot r_uv$, and $g=N\\cdot r_vv$. With the convention $S=-dN$, the shape operator is represented by $I^{-1}II$. Its eigenvalues $k_{1}$ and $k_{2}$ are the principal curvatures. Their product and half-sum are

$K = k_{1}k_{2}$, and $H = (k_{1}+k_{2})/2$.

Reversing the normal reverses both principal curvatures and $H$, but leaves $K$ unchanged. Thus a sign for mean curvature always carries an orientation convention.

This instrument fixes the normal using $r_v\\times r_u$ and does not offer a normal-reversal control. The sphere choice is outward and therefore has signed principal curvatures $-1/R$ under $S=-dN$. The reversal exercise below is a paper calculation. The engine estimates the two principal values from $H$ and $K$; it does not display eigenvectors or a full coordinate matrix. The angle control is an abstract angle from an orthonormal principal direction, not an angle in the generally nonorthonormal $(u,v)$ coordinate basis.

## What to test

1. On a sphere, sample many parameter points. Both principal curvatures have equal magnitude, so every direction is principal and every point is umbilic.
2. On a torus, move from the outside to the inside of the tube. Record where Gaussian curvature changes sign and relate the change to elliptic and hyperbolic point classifications.
3. Compare the catenoid and helicoid. Their embeddings look different, yet both are minimal: away from numerical error their mean curvature is zero.
4. On the monkey saddle, vary the tangent direction. Euler's formula predicts the normal curvature from $k_{1}$, $k_{2}$, and the angle to a principal direction.
5. Increase the mesh resolution and record the area estimate. A stabilizing sequence is numerical evidence, not an exact proof of the limiting area.

## Numerical and interpretive boundaries

The displayed derivatives and curvatures are computed from the declared parametrizations. Near a singular chart point, small denominators can amplify floating-point error; the lab labels such points rather than inventing a curvature value. A mesh is a sampled approximation, so faceted shading, apparent self-intersection, or a stable decimal does not by itself prove a global geometric theorem. Colour is redundant with labels and numbers, and motion is optional and disabled when reduced motion is requested.

Area is estimated only on the displayed finite parameter patch; the sphere latitude range excludes its poles. A catenoid or helicoid is minimal in the stationary-area sense proved by its exact $H=0$ identity, not automatically a global least-area competitor. This laboratory makes no classification claim about every ruled minimal surface.

For a precise local catenoid–helicoid comparison, set the catenoid waist $a$ equal to the helicoid pitch $c$. Writing the catenoid height parameter as $w$ and substituting the helicoid radial parameter $v=a\\sinh(w/a)$ gives the same metric on both:

$$a^2\\cosh^2(w/a)\\,du^2+\\cosh^2(w/a)\\,dw^2.$$

This is a local parameter correspondence on regular patches. The independently chosen scales in the two presets do not assert this equality, and their global identifications differ. The [ruled, revolution and minimal-surfaces chapter](/books/differential-geometry-curves-surfaces/ruled-revolution-minimal-surfaces/) supplies the actual curvature and first-variation proofs.

## Exercises with solutions

### 1. Orientation

If $N$ is replaced by $-N$, what happens to $I$, $II$, $k_{1}$, $k_{2}$, $K$, and $H$?

**Solution.** $I$ is unchanged. Every coefficient of $II$ changes sign, so the shape operator and both eigenvalues change sign. Consequently $K=k_{1}k_{2}$ is unchanged, while $H=(k_{1}+k_{2})/2$ changes sign.

### 2. A minimal point

Suppose the table reports principal curvatures $3$ and $-3$. Classify $H$ and $K$.

**Solution.** $H=(3-3)/2=0$, so mean curvature vanishes at this point. $K=3(-3)=-9$, so it is hyperbolic. Minimality of an entire regular patch requires $H=0$ throughout that patch; one sampled point does not establish it.

### 3. Euler normal curvature

At a point let $k_{1}=2$, $k_{2}=-1$. Find the normal curvature in a direction making angle $\\pi /3$ with the first principal direction.

**Solution.** Euler's formula gives $k_n=2 cos^{2}(\\pi /3)-sin^{2}(\\pi /3)=2(1/4)-3/4=-1/4$.

### 4. Area scale

Why does $EG-F^{2}=0$ prevent the displayed parameters from serving as a regular surface chart?

**Solution.** $EG-F^{2}=|r_u\\times r_v|^{2}$. If it is zero, the tangent vectors are dependent, so the derivative has rank below two and the parameters do not locally span a tangent plane.

## Next routes

Review [Surface Curvature Studio](#/labs?lab=visual-lab-parametric-surfaces) for a gentler parametrization-first treatment. Continue through the differential-geometry and multivariable-calculus catalog topics, then compare intrinsic Gaussian curvature with topology in the simplicial-homology workbench.
`;export{e as default};