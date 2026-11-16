# Surfaces: area, normals, and directional flux

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Learning outcomes:** parameterize a surface patch, compute its two tangent directions and oriented area vector, distinguish scalar surface area from signed flux, and explain a changed orientation. The input domain of a surface parameterization is two-dimensional even though its image lies in three-dimensional space.

## A small parameter rectangle becomes a tangent parallelogram

Let \(\mathbf R(u,v)=(x(u,v),y(u,v),z(u,v))\) be continuously differentiable on a parameter region \(D\). A small change in \(u\) creates the tangent vector \(\mathbf R_u\Delta u\), and a small change in \(v\) creates \(\mathbf R_v\Delta v\). To first order the image of a small parameter rectangle is the parallelogram with those two sides. Its signed area vector is \((\mathbf R_u\Delta u)\times(\mathbf R_v\Delta v)\). Dividing by \(\Delta u\Delta v\) and taking the limit gives

$$
d\mathbf S=(\mathbf R_u\times\mathbf R_v)\,du\,dv.
$$

This local calculation becomes a surface integral by summing patches and refining them. For area and ordinary flux over the *geometric surface once*, the map must also cover that surface once, apart from harmless shared patch edges. Regularity alone does not prevent repeated coverage. If a parameterization covers an open part twice, the displayed integrals count its area and flux twice; one must restrict the domain or explicitly account for multiplicity.

Its magnitude gives scalar area \(dS=\lVert\mathbf R_u\times\mathbf R_v\rVert\,du\,dv\), while a field's signed flux is \(\iint_S\mathbf F\cdot d\mathbf S\). Swapping \(u,v\) reverses the cross product and flux sign without changing scalar area. A regular parameterization requires \(\mathbf R_u\times\mathbf R_v\ne0\) in the interior; isolated coordinate singularities can be handled by suitable patches. A sampled mesh is evidence about geometry, not proof that no singularity lies between samples.

At each regular point define \(\mathbf n=(\mathbf R_u\times\mathbf R_v)/\lVert\mathbf R_u\times\mathbf R_v\rVert\). Then \(\mathbf F\cdot\mathbf n\,dS=\mathbf F\cdot(\mathbf R_u\times\mathbf R_v)\,du\,dv\). This equality explains both the sign and the missing factor in the common mistake of integrating \(\mathbf F\cdot\mathbf n\) against flat \(du\,dv\). Reversing orientation sends \(\mathbf n\) to \(-\mathbf n\); area is unchanged and flux changes sign. A field tangent to the patch has zero flux there even when its magnitude and the patch area are large.

For the graph \(z=f(x,y)\), use \(\mathbf R(x,y)=(x,y,f(x,y))\). The tangent columns are \((1,0,f_x)\) and \((0,1,f_y)\), so their cross product is \((-f_x,-f_y,1)\). Its positive third component means **upward** orientation. The upward flux formula is

$$
\iint_D\mathbf F(x,y,f(x,y))\cdot(-f_x,-f_y,1)\,dx\,dy.
$$

The scalar area formula is \(\iint_D\sqrt{1+f_x^2+f_y^2}\,dx\,dy\). These are different integrands. The unit normal divides the cross product by its magnitude, but \(dS\) then restores that magnitude in flux; keeping only the unit normal and \(dx\,dy\) undercounts a sloping surface.

For example, the plane \(z=x+y\) above the unit square has scalar area \(\sqrt3\). Its upward flux for the vertical field \(\mathbf K=(0,0,1)\) is \(1\), the area of its horizontal projection. If we reverse the normal, the area remains \(\sqrt3\) while the flux is \(-1\). The two answers are different because area measures the tilted parallelograms and vertical flux measures their projected signed area.

### One graph, two integrals

Take the cap \(z=x^2+y^2\) over the unit disk, oriented upward. Its cross product is \((-2x,-2y,1)\). For the constant field \(\mathbf K=(0,0,1)\), the upward flux is \(\iint_D1\,dA=\pi\): vertical projection preserves its signed flux. Its **surface area** is larger:

$$
A=2\pi\int_0^1r\sqrt{1+4r^2}\,dr
=\frac{\pi}{6}(5\sqrt5-1).
$$

The numerical value is about \(5.33\), compared with projected disk area \(\pi\). For a surface tilted increasingly steeply, scalar area grows even though vertical flux through its projection remains fixed. This contrast is why the two kinds of surface integrals need separate notation.

Now use \(\mathbf F=(x,y,1)\) on the downward paraboloid \(z=1-x^2-y^2\), over the unit disk with upward orientation. The area vector is \((2x,2y,1)dxdy\), and the flux is

$$
\iint_D (1+2x^2+2y^2)dA
=2\pi\int_0^1(1+2r^2)r\,dr=2\pi.
$$

The same graph with downward orientation has flux \(-2\pi\). If it is the **top** of the solid between the graph and \(z=0\), upward is also outward. The bottom disk's outward normal is downward, a distinction used by the divergence theorem in the next lesson.

### A curved graph in a field that changes with height

Now take \(S:z=1-x^2-y^2\) above the unit disk and \(\mathbf F=(xz,yz,z)\). At \((x,y)\) the height is \(h=1-r^2\); replacing \(z\) by \(h\) **before** taking the dot product prevents us from treating the field as constant on the surface. The upward area vector is \((2x,2y,1)\,dA\), so

$$
\mathbf F(x,y,h)\cdot d\mathbf S
=h(2x^2+2y^2+1)\,dA
=(1-r^2)(1+2r^2)\,dA.
$$

Consequently its flux is

$$
2\pi\int_0^1(1+r^2-2r^4)r\,dr
=2\pi\left(\frac12+\frac14-\frac13\right)
=\frac{5\pi}{6}.
$$

The rim lies in \(z=0\), where this field vanishes. If the cap is completed by its bottom disk, that disk contributes zero flux. The answer can later be checked by Gauss, but the calculation here required only a graph parameterization. Notice that the \(xz\) and \(yz\) components contribute through the sloping normal: a field need not point vertically to cross an upward-facing surface.

**Pause and decide.** Parameterize the same geometric cap with \(\widetilde{\mathbf R}(u,v)=(v,u,1-u^2-v^2)\), so the parameter order is reversed. Which of area, upward flux, and downward flux changes? Swapping parameter order reverses the raw cross product. To keep the **upward** answer you must reverse the new cross product again; the scalar area and upward flux remain unchanged. If you retain the new raw orientation, you have computed downward flux \(-5\pi/6\).

```exercise
{"id":"calc3-graph-flux","type":"written","prompt":"For z=1−x²−y² over x²+y²≤1, compute upward flux of F=(x,y,1). Then close the surface with its bottom disk. Give that disk's outward normal and flux, and explain why the total is consistent with divergence of F.","hints":["Use R_x×R_y=(2x,2y,1) on the top.","The solid lies above the plane z=0, so outward on the bottom points down. The field has divergence 2 and the solid volume is π/2."],"rubric":["Obtains top flux 2π from 1+2r²","Uses bottom normal −k and finds bottom flux −π","Computes total flux π","Independently finds divergence 2 and volume π/2","Checks smoothness and closed outward orientation"],"solution":"Top flux is ∫₀²π∫₀¹(1+2r²)rdrdθ=2π. On z=0, outward is −k, so F·n=−1 and bottom flux is −π. The total is π. Divergence F=2, and the solid volume is ∫₀²π∫₀¹(1−r²)rdrdθ=π/2; its volume integral of divergence is π. The field is smooth and the two surface patches form a closed, piecewise smooth outward boundary."}
```

## Parameterize something that is not a graph

A cylinder side of radius \(a>0\), height \(h>0\), has \(\mathbf R(\theta,z)=(a\cos\theta,a\sin\theta,z)\), with \(0\leq\theta\leq2\pi\), \(0\leq z\leq h\). Here \(\mathbf R_\theta=(-a\sin\theta,a\cos\theta,0)\) and \(\mathbf R_z=(0,0,1)\). Their cross product \((a\cos\theta,a\sin\theta,0)\) points radially outward. Side area is \(\int_0^h\int_0^{2\pi}a\,d\theta\,dz=2\pi ah\). The cross product is zero if \(a=0\), which is why the “cylinder” degenerates then.

For \(\mathbf V=(x,y,z)\), side flux is \(\int_0^h\int_0^{2\pi}a^2\,d\theta\,dz=2\pi a^2h\). Top flux is \(h\pi a^2\), bottom flux zero. The total \(3\pi a^2h\) matches divergence \(3\) times cylinder volume. This direct calculation is a useful baseline before using Gauss's theorem as a shortcut.

The interval \(0\le\theta\le2\pi\) describes the side once except for its shared seam. If instead \(0\le\theta\le4\pi\), \(\mathbf R_\theta\times\mathbf R_z\) remains nonzero everywhere, but every ordinary side point is visited twice. The parameter integral then gives side area \(4\pi ah\) and flux \(4\pi a^2h\), twice the physical values. Regularity tests the local tangent plane; one-to-one coverage tests what is being counted. A sphere parameterized by longitude and latitude has a different issue: the longitude direction collapses at the poles. One may omit those measure-zero parameter edges or use overlapping regular patches and count each geometric part once.

```exercise
{"id":"calc3-surface-method","type":"choice","prompt":"A regular cylinder side is parameterized by \\(\\mathbf R(\\theta,z)=(a\\cos\\theta,a\\sin\\theta,z)\\), \\(0\\le\\theta\\le4\\pi\\). What does the parameter integral over this rectangle count?","options":[{"label":"It gives zero flux because the second revolution has the opposite orientation.","correct":false,"feedback":"The same parameter direction is used on both revolutions, so the two contributions have the same sign."},{"label":"It gives the physical area once because the cross product is nonzero.","correct":false,"feedback":"A nonzero cross product guarantees a local area scale, not one-to-one coverage."},{"label":"It counts side area and ordinary flux twice because the side is covered twice.","correct":true,"feedback":"Yes. The cross product is nonzero, but regularity does not prevent repeated coverage."}],"hints":["Compare the points represented by θ and θ+2π before integrating."]}
```

```exercise
{"id":"calc3-surface-independent","type":"written","prompt":"Let \\(S\\) be \\(z=2-x^2-y^2\\) above \\(x^2+y^2\\le1\\), oriented upward, and \\(\\mathbf W=(x,y,z)\\). Find scalar area and signed flux. Explain which part of \\(\\mathbf W\\) crosses \\(S\\), and what reversing orientation changes.","hints":["Compute R_x×R_y and |R_x×R_y| separately; they answer different questions.","In polar coordinates W·(2x,2y,1)=2r²+(2−r²)."],"rubric":["Uses the upward area vector (2x,2y,1)","Computes area as π(5√5−1)/6","Computes upward flux as 5π/2","Explains the contribution of horizontal and vertical field components","Keeps area fixed and changes only the flux sign on reversal"],"solution":"The upward area vector is \\((2x,2y,1)\\,dA\\), with magnitude \\(\\sqrt{1+4r^2}\\,dA\\). Hence scalar area is \\(2\\pi\\int_0^1r\\sqrt{1+4r^2}\\,dr=\\pi(5\\sqrt5-1)/6\\). On \\(S\\), \\(\\mathbf W=(x,y,2-r^2)\\); its dot product with the area vector is \\(2r^2+2-r^2=2+r^2\\). Flux is \\(2\\pi\\int_0^1(2+r^2)r\\,dr=5\\pi/2\\). The horizontal components cross because the normal has horizontal components. Reversing orientation gives flux \\(-5\\pi/2\\) but leaves area fixed.","transfer":"Changed case: use the same S and W but restrict the parameter disk to r≤1/2. Compute upward flux and explain why multiplying the old answer by one quarter is invalid.","transferSolution":"The density remains \\(2+r^2\\), so restricted flux is \\(2\\pi\\int_0^{1/2}(2+r^2)r\\,dr=17\\pi/32\\). The projected area is one quarter as large, but the average \\(r^2\\) on the smaller disk is different, so flux does not scale by one quarter."}
```

### See the lower graph's outward normal, not merely its projection

The linked solid below is \(cr^2\le z\le H\). Move its selected radius first to the center and then to the rim. In the solid view, the rose arrow on the lower bowl points **out of the solid**, down and radially out; the teal arrow on its top disk points up. In the radial section, decide which way an outward arrow on the lower boundary must point before reading the labels. The drawn arrow is normalized for visibility; it does not give the area-vector magnitude.

```investigation
paraboloid-solid
```

For the lower graph \(\mathbf R(x,y)=(x,y,c(x^2+y^2))\), the usual cross product \(\mathbf R_x\times\mathbf R_y=(-2cx,-2cy,1)\) points **up into** this solid. The lower surface's outward area vector is its negative, \((2cx,2cy,-1)\,dx\,dy\). Hence for \(\mathbf F=(x,y,z)\), the lower-bowl flux density becomes \(2cr^2-cr^2=cr^2\), and

$$
\Phi_{\mathrm{bowl}}=\int_0^{2\pi}\int_0^{\sqrt{H/c}}cr^3\,dr\,d\theta
=\frac{\pi H^2}{2c}.
$$

The top disk contributes \(H\pi(H/c)=\pi H^2/c\) for this field. Change \(H\) and \(c\), then explain why the lower flux and the solid's volume happen to have the same numerical formula here: it follows from this particular field and paraboloid, not from a general rule equating flux and volume.

**Transfer:** A field \(\mathbf W=(0,0,z)\) passes through the graph \(z=2-x^2-y^2\) over the unit disk. Predict whether the upward flux equals area, projected area, or neither. Compute it. Then rotate the **orientation**, not the physical field, and explain every sign change. Keep the parameter disk fixed while you reason about \(d\mathbf S\).

<details><summary>Public model: signed flux, surface area and projected area</summary>

Write \(D=\{x^2+y^2\le1\}\) and \(f(x,y)=2-x^2-y^2\). The graph's upward vector area is

$$
d\mathbf S=(-f_x,-f_y,1)\,dA=(2x,2y,1)\,dA.
$$

Substitute the graph height into the field: \(\mathbf W(x,y,f)=(0,0,2-r^2)\). Hence

$$
\Phi_{\rm up}
=\iint_D(2-r^2)\,dA
=2\pi\int_0^1(2-r^2)r\,dr
=2\pi\left[r^2-\frac{r^4}{4}\right]_0^1
=\frac{3\pi}{2}.
$$

The projected disk area is \(\pi\). The scalar surface area is instead

$$
A_S=\iint_D\sqrt{1+4x^2+4y^2}\,dA
=2\pi\int_0^1r\sqrt{1+4r^2}\,dr
=\frac{\pi}{6}(5\sqrt5-1).
$$

Thus this flux equals neither area. It is a height-weighted projected integral because the vertical component of \(\mathbf W\) varies from \(2\) at the center to \(1\) at the rim. The scalar area weights the tilted patches instead. Using a unit normal does not add or remove an extra area factor: \(\mathbf W\cdot\mathbf n\,dS=\mathbf W\cdot d\mathbf S\).

Reversing the orientation while keeping the field and parameter disk fixed negates \(d\mathbf S\), so \(\Phi_{\rm down}=-3\pi/2\). The positive scalar area \(A_S\) and projected area \(\pi\) are unchanged; only the signed flux reverses.

</details>

## Optional clinic: count sheets before integrating a surface

This optional untimed continuation is outside the published route budget. Its duration, independent marking and learner outcomes are uncalibrated. All preceding lesson text, saved exercises and later timed papers are retained. The earlier cylinder counts the whole side twice; here the count changes across the image, and branch orientations can cancel.

Use dimensionless coordinates and set
\[
\begin{gathered}
D=[-2,2]\times[0,1],\\
q(u)=u^3-u,\\
R(u,v)=(q(u),v,0).
\end{gathered}
\]
The geometric surface is the set of image points, with no record of how many parameter values produced each point. We must establish the images and orientations of the monotone branches before treating this full map as a surface description. For a scalar density, area scaling uses the cross-product magnitude; for flux, a compatible orientation matters as well.

### Saved investigation: local scale, global count, signed count

Write a prediction before revealing each diagram and model. The first picture is a one-dimensional cross-section of the parameter map, not a perspective rendering of the surface. Its horizontal source coordinate is \(u\), and its vertical value is the output coordinate \(q(u)\). Because the second coordinate is unchanged, counting intersections counts surface preimages for every fixed \(v\).

```visual-story
{
  "id": "variable-sheet-count",
  "title": "Which surface is this parameter integral counting?",
  "prompt": "Separate local area scaling, the number of regular sheets, and their orientations. Derive the branch images before deciding which integral represents the geometric plate once.",
  "stages": [
    {
      "title": "Count regular sheets over an image point",
      "body": "Use \\(q(u)=u^3-u\\) and the flat surface map above. Put\n\\[\n\\begin{gathered}\na=1/\\sqrt3,\\\\\nc=2/(3\\sqrt3).\n\\end{gathered}\n\\]\nFor each fixed \\(v\\), the diagram plots source position \\(u\\) horizontally and target position \\(q(u)\\) vertically. The horizontal line selects an image coordinate. Its three intersections have the same unchanged second coordinate \\(v\\). The control uses \\(|r|\\le0.9\\), with selected coordinate \\(x=rc\\); it stays away from the critical values. Only the central fold is drawn: the source interval remains \\([-2,2]\\), whose endpoints lie outside this graph window. The selected preimages all lie inside the window.",
      "question": "Split the source at the two critical u-values. Derive each branch's image and orientation. How many distinct preimages does each image point have inside and outside the central strip? Count them separately at the critical values. Does removing the critical source lines restore single coverage?",
      "checkpoint": {
        "hint": "Use q′(u)=3u²−1 and evaluate q at −2, −a, a and 2. Count overlapping image intervals; do not count a repeated algebraic root twice.",
        "explanation": "The cross product is\n\\[\nR_u\\times R_v=(0,0,q'(u)),\n\\]\nwhere \\(q'(u)=3u^2-1\\). The three monotone source intervals have the following images:\n\\[\n\\begin{gathered}\n[-2,-a]\\longmapsto[-6,c],\\\\\n[-a,a]\\longmapsto[-c,c],\\\\\n[a,2]\\longmapsto[-c,6].\n\\end{gathered}\n\\]\nTheir signs are respectively positive, negative and positive. Each open branch is regular. The geometric image is the flat rectangle\n\\[\nS=[-6,6]\\times[0,1]\\times\\{0\\}.\n\\]\nFor \\(-c<x<c\\), each branch supplies one distinct preimage, so \\(N(x)=3\\). For \\(-6\\le x<-c\\) or \\(c<x\\le6\\), only one branch supplies a preimage, so \\(N(x)=1\\). At \\(x=0\\), the three inputs are exactly \\(-1,0,1\\).\n\nAt the two critical values, use\n\\[\n\\begin{gathered}\nq(u)-c=(u+a)^2(u-2a),\\\\\nq(u)+c=(u-a)^2(u+2a).\n\\end{gathered}\n\\]\nThus \\(x=c\\) has the two distinct preimages \\(-a,2a\\), and \\(x=-c\\) has \\(a,-2a\\). Here \\(N=2\\), not three. The moving diagram excludes these collisions; these exact factorizations settle them.\n\nThe two critical source lines have parameter area zero. Removing them leaves all three regular branches, whose images still overlap on an open strip of positive area. Local regularity and global single coverage are separate conditions.",
        "criteria": [
          "Derives all three branch images from monotonicity and endpoint values.",
          "Counts distinct preimages, including both critical values.",
          "Identifies the positive/negative/positive orientation pattern.",
          "Explains why deleting the critical lines does not remove the open overlap."
        ]
      },
      "scene": "scene \"Three regular preimages over a central image coordinate\";\ndomain -1.3 1.3; range -0.7 0.7;\nparam r=0 from -0.9 to 0.9;\nlet a=1/sqrt(3); let c=2/(3*sqrt(3)); let selected_x=r*c;\nlet theta=acos(r)/3;\nlet left=2*a*cos(theta+2*pi/3); let middle=2*a*cos(theta+4*pi/3); let right=2*a*cos(theta);\nfn q(x)=x^3-x; plot q color blue;\nsegment selected_level from (-1.3,selected_x) to (1.3,selected_x) color amber;\npoint left_preimage=(left,q(left)) color teal; point middle_preimage=(middle,q(middle)) color rose; point right_preimage=(right,q(right)) color teal;\npoint left_critical=(-a,c) color violet; point right_critical=(a,-c) color violet;\nmeasure selected_image_coordinate=selected_x; measure distinct_preimages=3;\nmeasure left_orientation_factor=3*left^2-1; measure middle_orientation_factor=3*middle^2-1; measure right_orientation_factor=3*right^2-1;\nmeasure total_root_residual=abs(q(left)-selected_x)+abs(q(middle)-selected_x)+abs(q(right)-selected_x);",
      "focus": [
        "curve-q",
        "line-selected_level",
        "point-left_preimage",
        "point-middle_preimage",
        "point-right_preimage"
      ]
    },
    {
      "title": "Test a global correction against a changed density",
      "body": "Give the geometric plate the nonnegative density\n\\[\n\\rho_\\alpha(x,y,0)=1+\\alpha x^2,\n\\]\nwith \\(\\alpha\\ge0\\). The control explores \\(0\\le\\alpha\\le1\\). Compare the true geometric integral, the full absolute parameter sum, and that sum divided by a single factor chosen to make the area correct. The graph's horizontal coordinate is the density parameter; its vertical coordinate is a weighted integral.",
      "question": "Compute all three branch contributions. Does division by three repair the full image integral? If one calibrates a divisor using density one, does it remain correct after the density changes? Give a local multiplicity correction and prove why it works for a continuous density.",
      "checkpoint": {
        "hint": "For the test family use H(x)=x+αx³/3. On a decreasing branch, absolute area reverses the endpoint order. The central output strip is counted three times and the rest once.",
        "explanation": "For \\(H(x)=x+\\alpha x^3/3\\), ordinary one-variable substitution on each monotone branch gives three positive contributions:\n\\[\n\\begin{gathered}\nB_1=H(c)-H(-6),\\\\\nB_2=H(c)-H(-c),\\\\\nB_3=H(6)-H(-c).\n\\end{gathered}\n\\]\nThe decreasing branch contributes \\(B_2\\) with this positive order when scalar area uses \\(|q'|\\). The geometric value is\n\\[\nM_\\alpha=12+144\\alpha.\n\\]\nThe full absolute parameter value is\n\\[\n\\begin{gathered}\nA_\\alpha=B_1+B_2+B_3\\\\\n=M_\\alpha+4c+4\\alpha c^3/3.\n\\end{gathered}\n\\]\nDividing by three corrects the central strip alone. It undercounts the outer strips, which have positive area and positive test density.\n\nAt \\(\\alpha=0\\), the area-calibrated divisor is\n\\[\n\\begin{gathered}\nm=(12+4c)/12\\\\\n=1+c/3.\n\\end{gathered}\n\\]\nIt makes \\(A_0/m=M_0=12\\). At a positive \\(\\alpha\\), however,\n\\[\n\\begin{gathered}\nM_\\alpha-A_\\alpha/m\\\\\n=\\frac{\\alpha(48c-4c^3/3)}m>0.\n\\end{gathered}\n\\]\nThe sign follows from \\(c^2=4/27<36\\). The equality case is exactly \\(\\alpha=0\\). The diagram reports this factored shortfall rather than subtracting nearly equal totals.\n\nMore generally no one constant divisor works for every continuous density. Density one requires \\(1+c/3\\), whereas density \\(x^2\\) requires \\(1+c/729\\): its geometric integral is \\(144\\), and its absolute parameter integral is \\(144+4c^3/3\\). These are two explicit incompatible requirements. A scalar can of course be fitted to one chosen integral; that does not validate it for other densities.\n\nA constructive correction uses the local count. For continuous \\(\\rho\\) on \\(S\\), define\n\\[\nK(u,v)=\\frac{\\rho(R(u,v))}{N(q(u))}.\n\\]\nThen\n\\[\n\\begin{gathered}\n\\iint_D K\\,|q'|\\,du\\,dv\\\\\n=\\iint_S\\rho\\,dS.\n\\end{gathered}\n\\]\nTo prove it, substitute on each monotone branch, then add its image integral. Away from the two critical image lines, exactly \\(N(x)\\) branches each contribute \\(\\rho(x,y,0)/N(x)\\), adding to \\(\\rho\\). The exceptional vertical lines have area zero. The corrected source integrand is bounded, with possible jumps only on finitely many vertical lines, so these are proper Riemann integrals. Its denominator is a positive count, never a Jacobian. The proof is a finite branch calculation for this map.",
        "criteria": [
          "Uses the absolute derivative and the correct endpoint order on every branch.",
          "Separates the geometric integral from its multiplicity-weighted parameter sum.",
          "Proves the exact calibration equality and strict positive-parameter shortfall.",
          "Derives a local correction by summing all branch images, with harmless exceptional lines identified."
        ]
      },
      "scene": "scene \"A divisor calibrated on area fails after the density changes\";\ndomain 0 1; range 0 165;\nparam alpha=1 from 0 to 1;\nlet c=2/(3*sqrt(3)); let calibration=1+c/3;\nfn geometric(x)=12+144*x; fn counted(x)=12+4*c+(144+4*c^3/3)*x; fn calibrated(x)=counted(x)/calibration;\nplot geometric color blue; plot counted color amber; plot calibrated color rose;\npoint geometric_value=(alpha,geometric(alpha)) color blue; point counted_value=(alpha,counted(alpha)) color amber; point calibrated_value=(alpha,calibrated(alpha)) color rose;\nmeasure geometric_weighted_area=geometric(alpha); measure absolute_parameter_sum=counted(alpha); measure area_calibration_factor=calibration;\nmeasure calibrated_parameter_sum=calibrated(alpha); measure counted_excess=4*c+4*alpha*c^3/3;\nmeasure calibrated_shortfall=alpha*(48*c-4*c^3/3)/calibration;",
      "focus": [
        "curve-geometric",
        "curve-counted",
        "curve-calibrated",
        "point-calibrated_value"
      ]
    },
    {
      "title": "Explain signed agreement and choose a compatible cover",
      "body": "Orient the geometric flat plate upward. For a continuous vertical field, its flux uses that fixed upward normal. The raw cross product of the full map points upward on the outer branches and downward on the middle branch. The diagram instead shows images of two selected outer strips. Its arrows show increasing source direction; both selected strips point upward as surface patches.",
      "question": "Prove what the signed full-source integral equals for every continuous vertical field. Does this equality prove that the full map covers the plate once? Construct an explicit compatible patch cover. For the displayed truncated selector, derive the covered region, weighted integral and exact zero endpoint.",
      "checkpoint": {
        "hint": "On the central strip, the signed count is +1−1+1. For a one-cover selector, q maps [−2,−1] onto [−6,0] and [1,2] onto [0,6], with q′≥2 on both strips.",
        "explanation": "Write a continuous vertical field as \\(F=(0,0,w(x,y))\\). The signed full-source flux is\n\\[\n\\iint_D w(q(u),v)\\,q'(u)\\,du\\,dv.\n\\]\nFor each fixed \\(v\\), the ordinary chain-rule substitution gives its inner integral as\n\\[\n\\int_{-6}^{6}w(x,v)\\,dx.\n\\]\nEquivalently, the three signed branch contributions have signs \\(+,-,+\\). Their signed image count is one on the outer strips and\n\\[\n+1-1+1=1\n\\]\non the central strip. Proper Fubini therefore proves equality with the geometric upward flux for every continuous \\(w\\).\n\nThis is a valid flux calculation when justified by that branch identity. The full source still has three preimages over the middle strip and its raw orientations disagree. The equality does not make it an ordinary once-covered upward chart, or justify using signed determinants as a general scalar-area rule.\n\nFor a compatible one-cover construction, choose the two source strips\n\\[\n\\begin{gathered}\n[-2,-1]\\times[0,1],\\\\\n[1,2]\\times[0,1].\n\\end{gathered}\n\\]\nBoth have \\(q'\\ge2\\), point upward, and map to the left and right halves of \\(S\\). Their images meet only on the zero-area seam \\(x=0\\). The closed union has two preimages on that seam; omitting one source endpoint makes coverage literally single there. Either convention gives the same ordinary integral. Each strip is a regular injective patch, so its positive area and upward flux have the intended geometric meaning.\n\nThe control truncates these strips to \\([-s,-1]\\) and \\([1,s]\\), where \\(1\\le s\\le2\\). Put \\(Q=q(s)\\). Their combined image is\n\\[\n[-Q,Q]\\times[0,1]\\times\\{0\\}.\n\\]\nIts area is \\(2Q\\), and for the test density its mass is\n\\[\n2Q+2\\alpha Q^3/3.\n\\]\nAt \\(s=2\\), this recovers the full plate. At \\(s=1\\), both strips collapse to edges and the area and mass are exactly zero. That endpoint is a zero-area extension of the family, not a claim that a collapsed edge is a regular surface patch.",
        "criteria": [
          "Proves the signed equality for every continuous vertical field and identifies the branch cancellation.",
          "Treats that equality as valid without mistaking it for single coverage.",
          "Constructs compatible regular patches and accounts for their seam.",
          "Derives the truncated selector's image and handles its zero-area endpoint exactly."
        ]
      },
      "scene": "scene \"Two compatible outer patches cover the plate once\";\ndomain -6.5 6.5; range -1.1 1.3;\nparam s=2 from 1 to 2; param alpha=1 from 0 to 1;\nfn q(x)=x^3-x; let edge=q(s);\nsegment lower_boundary from (-edge,0) to (edge,0) color amber;\nsegment upper_boundary from (-edge,1) to (edge,1) color amber;\nsegment left_boundary from (-edge,0) to (-edge,1) color amber;\nsegment right_boundary from (edge,0) to (edge,1) color amber;\narrow left_patch_image from (-edge,-0.35) to (0,-0.35) color blue;\narrow right_patch_image from (0,-0.75) to (edge,-0.75) color teal;\npoint shared_seam=(0,0) color rose;\nmeasure right_image_endpoint=edge; measure selected_geometric_area=2*edge;\nmeasure selected_weighted_area=2*edge+2*alpha*edge^3/3;\nmeasure selected_source_width=2*(s-1); measure least_selected_orientation_factor=2;\nmeasure full_signed_parameter_value=12+144*alpha;",
      "focus": [
        "line-lower_boundary",
        "line-upper_boundary",
        "arrow-left_patch_image",
        "point-shared_seam"
      ]
    }
  ]
}
```

### Why the branch calculation permits critical edges

The calculation can be proved with prerequisites already used in [ordinary substitution](integration-techniques.md) and [proper double integrals](double-integrals.md). Let \(w\) be continuous on the compact target rectangle. At a fixed \(v\), define
\[
H_v(t)=\int_0^t w(x,v)\,dx.
\]
The fundamental theorem and chain rule give
\[
\begin{gathered}
\frac d{du}H_v(q(u))\\
=w(q(u),v)q'(u).
\end{gathered}
\]
Integrating on each closed monotone interval proves the signed endpoint formula. On the decreasing interval, changing its sign gives the positive absolute-derivative integral with ascending image bounds. A zero derivative at an endpoint causes no problem in this proof. Integrating in \(v\) is proper Fubini on bounded rectangles with continuous integrands; the finitely many boundary lines have zero area.

The standard multivariable theorem needs its coverage hypotheses. [Lebl's author-hosted *Basic Analysis II*, Theorem 10.7.2](https://www.jirka.org/ra/html/sec_mvchangeofvars.html) assumes injectivity on an open neighborhood and a nowhere-zero Jacobian on the compact integration set. We have proved the branch identities directly instead of applying that closed-set statement at critical edges. [OpenStax Calculus Volume 3, section 5.7](https://openstax.org/books/calculus-volume-3/pages/5-7-change-of-variables-in-multiple-integrals) gives the usual calculus formulation. The cubic investigation, calibration counterexample, notebook and changed-source tasks here are original developments.

### Unary notebook: compare branch antiderivatives

For the authored density \(1+\alpha x^2\), the primitive is \(W(x)=x+\alpha x^3/3\). Predict eight outputs: the three positive branch contributions; their absolute sum; their signed sum; the geometric integral; the area-calibrated quotient; and its positive shortfall below the geometric value. The last output uses the factored expression proved above, so its exact zero at \(\alpha=0\) is not obtained by subtracting nearly equal totals.

```notebook
param alpha=1 from 0 to 1;
let c=2/(3*sqrt(3));
let K=1+c/3;
fn W(x)=x+alpha*x^3/3;
let left=W(c)-W(-6);
let middle=W(c)-W(-c);
let right=W(6)-W(-c);
show left;
show middle;
show right;
show left+middle+right;
show left-middle+right;
show W(6)-W(-6);
show (left+middle+right)/K;
show alpha*(48*c-4*c^3/3)/K;
```

Run at zero and at positive density parameters. The fifth and sixth outputs agree for this full source, despite repeated coverage. The seventh and sixth agree at zero; the final factored shortfall is strictly positive at every positive parameter.

Now change the density to \(1+\alpha x^4\). Derive its primitive and the revised shortfall before replacing **both** of these lines:

```text
fn W(x)=x+alpha*x^5/5;
show 4*alpha*c*(1296-c^4)/(5*K);
```

Keep every branch endpoint and the first seven output lines unchanged. Explain why the signed identity survives this density change, and why changing the primitive while leaving the old shortfall formula would not check the edited task.

<details><summary>Quartic-density hint</summary>

Use the primitive \(x+\alpha x^5/5\), and sum the same three image intervals. The geometric integral of \(x^4\) on \([-6,6]\) is \(15552/5\). The extra central copies contribute \(4c^5/5\). The divisor \(K=1+c/3\) was still calibrated using density one.

</details>

<details><summary>Quartic-density model reasoning</summary>

The edited geometric and signed values are
\[
M_4=12+15552\alpha/5.
\]
The absolute parameter sum is
\[
\begin{gathered}
A_4=12+4c\\
+\alpha(15552+4c^5)/5.
\end{gathered}
\]
Subtracting the calibrated quotient from the geometric value and factoring gives
\[
\begin{gathered}
M_4-A_4/K\\
=\frac{4\alpha c(1296-c^4)}{5K}.
\end{gathered}
\]
This is zero at \(\alpha=0\) and strictly positive for \(\alpha>0\), because \(c>0\), \(K>0\) and \(c^4<1296\). The eight edited outputs have the same meanings as before. The signed identity persists because the signed branch count remains one; it did not depend on the polynomial degree. The calibrated quotient continues to fail for positive parameters. Both edited lines are needed to make the reported shortfall refer to the changed density.

</details>

### Independent written task: remove part of the source

The following source restriction is outside the default controls and notebook. Recompute its image and both kinds of count before using any previous formula. A source boundary can map into the interior of the geometric image.

```exercise
{
  "id": "calc3-variable-multiplicity-truncated-source",
  "type": "written",
  "prompt": "Independent changed source. Keep the same surface map \\(R\\), but replace the parameter domain by\n\\[\nD'=[-1,2]\\times[0,1].\n\\]\nKeep \\(a=1/\\sqrt3\\) and \\(c=2/(3\\sqrt3)\\).\n\n(a) Derive the three branch images, the geometric plate \\(S'\\), its distinct-preimage count \\(N'\\), and its signed branch count on each open output strip. Count distinct preimages separately at \\(x=-c,c,0\\). Does the old central count of three remain correct?\n\n(b) Compute the geometric area and the geometric integral of density \\(x^2\\). Compute the corresponding full absolute parameter integrals. Then compute the raw signed parameter fluxes for vertical fields with components one and \\(x^2\\). Explain precisely where signed cancellation now removes a genuine part of the geometric upward flux.\n\n(c) Construct a single compatible source branch that covers the changed geometric image once. Justify the critical edge without applying a theorem that requires a nonzero Jacobian there.\n\n(d) Suppose someone retains the original count \\(N\\) in the local correction while using the changed source \\(D'\\). For density one, find the resulting integral and its exact error. Derive a correct \\(N'\\)-based repair from the branch images.",
  "hints": [
    "Evaluate q at the new source endpoint −1 before counting branch overlaps. The left branch no longer reaches negative x.",
    "The decreasing branch still covers [−c,c], while the right branch covers [−c,6]. Count signed contributions as well as distinct roots.",
    "At x=−c, the old regular preimage −2a is outside the changed source. At x=0 the new boundary point u=−1 still counts as a distinct preimage.",
    "On [a,2], q is strictly increasing from −c to6. The derivative vanishes at its left endpoint; the ordinary chain-rule substitution still holds there.",
    "On −c<x<0 the old divisor is3 but only two source branches remain. Integrate the resulting fraction of density one on that strip."
  ],
  "rubric": [
    "Derives the changed branch images and geometric image from endpoint values.",
    "Obtains the new 2/3/1 counts and the correct three exceptional point counts.",
    "Separates geometric, absolute and signed area and x² integrals.",
    "Explains the zero signed count on the negative central strip.",
    "Constructs the compatible right branch and justifies its critical boundary by ordinary substitution.",
    "Quantifies the stale-count error and proves a corrected local-count identity.",
    "Distinguishes the changed source from the symmetric case."
  ],
  "solution": "The three source intervals now have images\n\\[\n\\begin{gathered}\n[-1,-a]\\longmapsto[0,c],\\\\\n[-a,a]\\longmapsto[-c,c],\\\\\n[a,2]\\longmapsto[-c,6].\n\\end{gathered}\n\\]\nTheir orientation signs remain \\(+,-,+\\). Therefore\n\\[\nS'=[-c,6]\\times[0,1]\\times\\{0\\}.\n\\]\nOn \\(-c<x<0\\), only the middle and right branches occur, giving \\(N'=2\\) and signed count zero. On \\(0<x<c\\), all three occur, giving \\(N'=3\\) and signed count one. On \\(c<x<6\\), only the right branch occurs, giving \\(N'=1\\) and signed count one.\n\nAt \\(x=-c\\), only \\(u=a\\) remains: the other root \\(-2a<-1\\) was removed. Thus there is one distinct preimage. At \\(x=c\\), both \\(-a\\) and \\(2a\\) remain, giving two. At \\(x=0\\), \\(-1,0,1\\) remain, giving three, including a source boundary point. These exceptional output lines have area zero for integration, but their point counts are not all the same.\n\nThe geometric area is \\(6+c\\). Summing positive branch lengths gives\n\\[\n\\begin{gathered}\nc+2c+(6+c)\\\\\n=6+4c.\n\\end{gathered}\n\\]\nSumming with orientation gives\n\\[\nc-2c+(6+c)=6.\n\\]\nThus the raw signed flux for the constant upward field misses the negative central strip, whose geometric area is \\(c\\). It is not the upward flux of the whole changed plate.\n\nFor density or vertical component \\(x^2\\), use the primitive \\(x^3/3\\). The geometric value is\n\\[\nM'=72+c^3/3.\n\\]\nThe positive branch contributions are\n\\[\n\\begin{gathered}\nc^3/3,\\\\\n2c^3/3,\\\\\n72+c^3/3.\n\\end{gathered}\n\\]\nTheir absolute sum is \\(72+4c^3/3\\), while the signed sum is \\(72\\). The missing geometric flux is \\(c^3/3\\), exactly the integral of \\(x^2\\) over \\(-c<x<0\\). The original symmetric signed identity has changed because its signed branch count has changed.\n\nThe single right branch \\([a,2]\\times[0,1]\\) covers \\(S'\\) once and points upward in its interior. Strict increase follows from \\(q'>0\\) for \\(u>a\\), together with continuity at \\(a\\). The cross product vanishes on the left boundary, not inside the patch. For a continuous component \\(w\\), take a primitive in its first variable and apply the chain rule on the closed source interval. The resulting substitution permits this zero endpoint derivative. Alternatively truncate to \\([a+\\varepsilon,2]\\) and let \\(\\varepsilon\\downarrow0\\), with bounded continuous integrands. This is not an application of a closed-set theorem requiring a nonzero Jacobian at the edge.\n\nIf the old \\(N\\) is retained, the negative central strip contributes only \\(2/3\\) of its geometric value. All other open image strips receive the correct fraction. For density one the stale-count result is\n\\[\n6+2c/3,\n\\]\nwhich falls short of \\(6+c\\) by \\(c/3\\). This is a finite exact error, not a boundary effect. Dividing by the new \\(N'\\) instead makes the two, three or one equal branch contributions add to one copy of the density on each corresponding strip. Finite monotone substitutions prove the repaired identity; assigning the exact positive counts on exceptional lines does not change the integrals.",
  "transfer": "Keep the changed source D′ and its geometric plate, but use the continuous vertical field F=(0,0,x). Compute its geometric upward flux and its raw signed parameter flux. Explain why the sign-changing component is a valid flux integrand but is not a nonnegative mass density.",
  "transferSolution": "The geometric upward flux is\n\\[\n\\begin{gathered}\n\\int_{-c}^{6}x\\,dx\\\\\n=18-c^2/2.\n\\end{gathered}\n\\]\nThe raw signed branch count is zero on the negative strip and one on the positive strip. Its flux is therefore \\(\\int_0^6x\\,dx=18\\), exceeding the geometric value by \\(c^2/2\\). The omitted negative contribution reverses the direction of the error seen with nonnegative components. The compatible right branch or the correctly oriented local-count construction recovers the geometric value. A continuous vertical component may have either sign in flux; negative x cannot serve as a nonnegative mass density on this plate."
}
```

The transferable decision is concrete: identify the geometric surface and its desired orientation, derive the regular branch images, and decide what each parameter integral counts. A global calibration can fit one quantity; a signed cancellation can give a correct value under a proved branch identity. A geometric one-cover construction or a justified local correction addresses the actual coverage.

