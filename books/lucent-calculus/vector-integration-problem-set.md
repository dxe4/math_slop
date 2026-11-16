# Calculus III independent problem set: regions and conservation

**Role:** independent work after the vector-integration recitation. Allow about two problem sessions. Each answer needs a domain description, a method choice, and a check. The prompts deliberately mix topics; the title of a question does not tell you which theorem to use. Submit an attempt before opening staged hints. Written responses are saved for self-review, not automatically certified as proofs.

## 1. Describe a curved plate twice

On \(D=\{(x,y):0\leq x\leq1,\ 0\leq y\leq x^2\}\), density is \(\rho=x+y\). Compute the mass by integrating in both orders. State why both iterated integrals represent the same plate, and give a unit check if \(x,y\) are metres and \(\rho\) kilograms per square metre.

```exercise
{"id":"calc3-pset-region","type":"written","prompt":"Submit both descriptions and evaluations for Problem 1, including the units check.","hints":["For horizontal slices, 0≤y≤1 and sqrt(y)≤x≤1.","For the original order, first integrate x+y over 0≤y≤x²; compare with the reversed order."],"rubric":["Gives both correct regions and bounds","Evaluates original order to 7/20","Evaluates reversed order independently to 7/20","Justifies Fubini with continuity on a bounded piecewise smooth region","Reports mass in kilograms"],"solution":"The original order is ∫₀¹∫₀^(x²)(x+y)dydx=∫₀¹(x³+x⁴/2)dx=1/4+1/10=7/20. Horizontal slices use 0≤y≤1, sqrt(y)≤x≤1. Their integral is ∫₀¹[(1−y)/2+y(1−sqrt(y))]dy=∫₀¹(1/2+y/2−y^(3/2))dy=1/2+1/4−2/5=7/20. Continuity and the bounded region justify the change of order. Density times square metres gives kilograms."}
```

## 2. An elliptical washer with a radial density

Let \(1/4\leq x^2/4+y^2\leq1\), and let density equal \(x^2/4+y^2\). Find mass and average density. Show the coordinate map and determinant; do not infer the bounds from a circular sketch without stating them.

```exercise
{"id":"calc3-pset-ellipse","type":"written","prompt":"Submit the transformed region, area factor, mass, and average density for Problem 2.","hints":["Use x=2r cosθ, y=r sinθ. The inner ellipse becomes r=1/2.","The Jacobian is 2r; calculate the geometric washer area separately for the average."],"rubric":["Uses 1/2≤r≤1 and 0≤θ<2π","Computes Jacobian 2r","Obtains mass 15π/16","Obtains area 3π/2 and average density 5/8","Explains the ellipse center is omitted but the angular seam has zero area"],"solution":"With T(r,θ)=(2r cosθ,r sinθ), the density is r² and |det DT|=2r. Thus mass is ∫₀²π∫_(1/2)^1 2r³drdθ=15π/16. Area is ∫₀²π∫_(1/2)^1 2rdrdθ=3π/2, so average density is (15π/16)/(3π/2)=5/8. The parameter range covers the washer once apart from its angular seam; the omitted center is not in this washer."}
```

## 3. A hemisphere's center of mass

A uniform solid is the upper hemisphere \(x^2+y^2+z^2\leq R^2, z\geq0\), \(R>0\). Find its average height. Derive the spherical bounds from the geometry and show which angle is measured from the positive \(z\)-axis. Compare your answer with \(R/2\); a plausible-looking midpoint is not evidence for the center of mass.

```exercise
{"id":"calc3-pset-hemisphere","type":"written","prompt":"Submit spherical bounds, volume, first moment, and average height for Problem 3.","hints":["Use 0≤ρ≤R, 0≤φ≤π/2, 0≤θ≤2π and dV=ρ² sinφ dρdφdθ.","Integrate z=ρ cosφ against dV; then divide by upper-hemisphere volume."],"rubric":["Gives geometrically correct spherical bounds","Includes ρ² sinφ volume factor","Computes volume 2πR³/3","Computes z-moment πR⁴/4","Concludes average z=3R/8 and explains why it is below R/2"],"solution":"The upper hemisphere uses ρ∈[0,R], φ∈[0,π/2] measured down from the positive z-axis, and θ∈[0,2π]. Its volume is (R³/3)(1)(2π)=2πR³/3. The z-moment is ∫ρ cosφ·ρ² sinφ dρdφdθ=(R⁴/4)(1/2)(2π)=πR⁴/4. Division gives 3R/8, below R/2 because more of the hemisphere's volume is near its wide base than near its narrow top."}
```

## 4. Decide whether a path calculation is necessary

For \(\mathbf F=(2xy,x^2+2y)\), find work from \((0,0)\) to \((1,2)\). Verify your method by directly parameterizing the curve \(\mathbf c(t)=(t,2t^2)\), \(0\leq t\leq1\). Which hypotheses make the endpoint shortcut valid?

```exercise
{"id":"calc3-pset-potential","type":"written","prompt":"Submit both calculations for Problem 4 and the path-independence conditions.","hints":["Integrating the first component with respect to x suggests potential x²y+h(y).","Along c(t), compute F(c(t))·c′(t) before integrating."],"rubric":["Finds potential x²y+y² plus a constant","Computes endpoint work 6","Checks direct path integrand 24t³ and integral 6","States the field is smooth and the potential valid on an open set containing the path"],"solution":"A potential is Φ=x²y+y², since its gradient is (2xy,x²+2y). The field is smooth on R², so work is Φ(1,2)−Φ(0,0)=2+4=6. Along c=(t,2t²), F(c)=(4t³,5t²) and c′=(1,4t); their dot product is 24t³, whose integral from zero to one is 6. The endpoint shortcut follows from the chain rule for a differentiable potential on a neighborhood of the whole path."}
```

## 5. A boundary with a straight part

Let \(D\) be the upper half-disk of radius \(R>0\) and \(\mathbf F=(-y,x)\). Compute its positively oriented circulation by an interior integral and directly along its curved and straight boundary pieces. Which direction does the diameter travel?

```exercise
{"id":"calc3-pset-halfdisk","type":"written","prompt":"Submit the two circulation calculations for Problem 5 and justify both boundary directions.","hints":["The upper semicircular arc goes from (R,0) to (−R,0) counterclockwise; the diameter closes from left to right.","On the diameter y=0 and dy=0. The scalar curl is 2."],"rubric":["Gets half-disk area πR²/2 and curl integral πR²","Parametrizes arc counterclockwise and finds πR²","Orients diameter from (−R,0) to (R,0) and finds zero","States smoothness and positive boundary orientation"],"solution":"Curl F=∂x(x)−∂y(−y)=2, so Green gives 2·πR²/2=πR². The positive boundary traverses the upper arc c(t)=(R cos t,R sin t), 0≤t≤π, then the diameter from (−R,0) to (R,0). On the arc F(c)·c′=R², giving πR². On the diameter y=0 and dy=0, so Pdx+Qdy=0. The field is C¹ near the closed half-disk."}
```

## 6. Three surface patches, one volume theorem

Let \(E=\{x^2+y^2\leq1,\ 0\leq z\leq2-x^2-y^2\}\) and \(\mathbf F=(x,y,1)\). The boundary has a curved top, a flat bottom, and a vertical side. Compute each outward flux separately and then check the total by a volume integral. Why is the side present even though the top graph meets the plane somewhere else?

```exercise
{"id":"calc3-pset-three-patches","type":"written","prompt":"Submit three oriented patch fluxes and the divergence check for Problem 6.","hints":["At radius one the top has height one, so a vertical side connects it to z=0.","On the top use upward area vector (2x,2y,1)dA; on the side use R(θ,z)=(cosθ,sinθ,z), 0≤z≤1."],"rubric":["Identifies the side and its height one","Gets top flux 2π","Gets side flux 2π and bottom flux −π","Gets total flux 3π","Checks divergence 2 times volume 3π/2"],"solution":"The top has upward area vector (2x,2y,1)dA and dot product with F equal to 1+2r², giving 2π. On r=1, z∈[0,1], the outward side area vector is (cosθ,sinθ,0)dθdz, with dot product 1, giving 2π. The bottom normal is −k and F·n=−1, giving −π. Total flux is 3π. Divergence is 2, while volume is 2π∫₀¹(2−r²)rdr=3π/2, so Gauss gives 3π. At r=1 the top height is one, not zero; the vertical side is essential."}
```

## 7. A tilted spanning surface

Let \(C\) be the closed spatial curve \(\mathbf c(t)=(\cos t,\sin t,1-\cos t-\sin t)\), \(0\leq t\leq2\pi\), oriented by increasing \(t\). For \(\mathbf F=(-y/2,x/2,z)\), find its work directly and by curl flux through the part of plane \(z=1-x-y\) above the unit disk. Identify the compatible surface orientation; do not confuse this non-horizontal curve with the unit circle in \(z=0\).

```exercise
{"id":"calc3-pset-tilted-stokes","type":"written","prompt":"Submit direct circulation and surface-flux calculations for Problem 7, including orientation.","hints":["Curl F=(0,0,1). The upward graph area vector is (1,1,1)dA.","Along the boundary, the z-component contributes z(t)z′(t), which integrates to zero over a closed loop."],"rubric":["Computes direct planar contribution π","Shows z z′ contributes zero around closed curve","Uses upward plane normal area vector (1,1,1)dA","Computes curl flux π","States the upward graph induces the given counterclockwise projected traversal"],"solution":"The planar part of F(c)·c′ is 1/2, integrating to π. The remaining term is z(t)z′(t), whose integral is [z(t)²/2]₀²π=0; direct circulation is π. Curl F=(0,0,1). Parameterize the plane by R(x,y)=(x,y,1−x−y), with upward area vector R_x×R_y=(1,1,1)dA. Dotting with curl gives one, so flux over the unit disk is π. Increasing t projects counterclockwise to the xy-plane and is the boundary direction induced by the upward normal."}
```

## 8. Repair a false conservation argument

A peer claims: “\(\mathbf H=(x,y,z)/(x^2+y^2+z^2)^{3/2}\) has divergence zero, so its flux through every closed surface is zero.” Give one smooth closed surface that disproves the conclusion by direct calculation. Then write a corrected statement with the necessary domain condition and demonstrate it on a shell.

```exercise
{"id":"calc3-pset-singularity","type":"written","prompt":"Submit a counterexample and a domain-correct theorem statement for Problem 8.","hints":["Try a radius-R sphere centered at the origin; compute field dot outward normal.","A shell excludes the origin. Its inner boundary normal points toward the missing center."],"rubric":["Computes radius-R sphere flux 4π for R>0","Notes H is undefined at the enclosed origin despite being smooth on the sphere","States Gauss needs C¹ field on a neighborhood of the entire solid","Uses both outward-oriented shell boundaries and gets 4π−4π=0","Distinguishes pointwise divergence zero from a statement about all enclosing surfaces"],"solution":"On a radius-R sphere, H·n=1/R² and area is 4πR², giving flux 4π. H is undefined at the origin inside the ball, so Gauss's C¹-neighborhood hypothesis fails. On a shell ε≤r≤R, H is C¹ throughout a neighborhood of the closed shell, divergence is zero there, outer flux is 4π, and inner flux is −4π because outward from the shell points inward. Their sum is zero. A correct use of Gauss requires a field C¹ on an open neighborhood of the entire closed solid bounded by the oriented surface."}
```

**Later transfer:** A current has both a smooth rotational part and a punctured-plane vortex. Design two closed loops of different size and position that distinguish area-dependent circulation from winding-dependent circulation. Write what the two measurements can and cannot determine before checking numerically in the course investigation. The cumulative exam changes both the region and field.
