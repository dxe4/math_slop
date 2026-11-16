var e=`---
parent_id: book-electromagnetism-relativity
chapter_id: lorentz-transformations
title: "Special Relativity and Lorentz Transformations"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Special Relativity and Lorentz Transformations

The vacuum field equations identify a propagation speed, while experiments compare measurements made by different inertial observers. A Galilean change of velocity does not preserve a finite invariant light speed. Special relativity replaces that transformation with Lorentz geometry, changing how distant simultaneity and spatial length are assigned while retaining invariant spacetime relations.

We work in flat spacetime with coordinates $x^\\mu=(ct,x,y,z)$ and metric of signs $(+,-,-,-)$. Inertial coordinates are related by translations and Lorentz transformations. Accelerated observers can use local inertial frames, but a sequence of such frames is not one global inertial coordinate system. Curvature and gravitation are outside this chapter and this book.

## Events, synchronization and interval

An event is specified by a time and place in an inertial coordinate system. A worldline is a sequence of events associated with an object. Comparing two separated events is different from comparing two clocks that meet: the former requires a coordinate synchronization convention, while the latter permits a direct local comparison.

An inertial observer can assign coordinates to a reflected light signal by sending it at one clock reading and receiving it at another. The reflection event is assigned the average of the two readings and half their difference times light speed as distance. This is Einstein synchronization within the inertial frame. Extending it consistently yields inertial time slices and the standard one-way light-speed convention used in the Lorentz formulas.

The spacetime interval between two events is

$$\\Delta s^2=c^2\\Delta t^2-|\\Delta x|^2.$$

It is positive for timelike separation, zero for null separation and negative for spacelike separation. Unlike Euclidean squared length, it can therefore be negative for a nonzero displacement. The classification is invariant, while the separate spatial distance and coordinate time generally are not.

For timelike-separated events on a single inertial clock worldline, interval divided by squared light speed gives the square of that clock's elapsed proper time. For a curved timelike worldline, proper time is accumulated along the path; it is not generally the interval between the endpoint events. This distinction is the basis of the travelling-clock example, rather than a technical correction added after a paradox.

## Derive the standard boost

Consider a primed frame moving at constant speed $v$ in the positive first-coordinate direction relative to the unprimed frame. Homogeneity makes the coordinate change linear after origins coincide. The primed origin follows $x=vt$, so the first transformed coordinate is proportional to $x-vt$. Symmetry between transverse directions leaves their coordinates unchanged in this standard aligned construction.

Write the two linear expressions as $x^\\prime=ax+bct$ and $ct^\\prime=dct+ex$. Motion of the primed origin gives $b=-a\\beta$. Requiring the forward and backward light rays to retain their respective directions gives $a+b=d+e$ and $-a+b=-d+e$. Adding and subtracting those equations yields $e=b$ and $d=a$. Thus both coordinate expressions have the same coefficient pattern. Spatial isotropy makes the coefficient for the reversed boost equal to that for the original boost. Composing them then requires $a^2(1-\\beta^2)=1$. Choosing the branch continuous from the identity gives the positive normalization. The result is

$$ct'=\\gamma(ct-\\beta x),\\qquad x'=\\gamma(x-\\beta ct),\\qquad y'=y,\\quad z'=z,$$

$$\\beta=v/c,\\qquad\\gamma=(1-\\beta^2)^{-1/2},\\qquad |\\beta|<1.$$

To verify the normalization directly, subtract the squares of the first two transformed expressions. The mixed terms cancel, leaving the original difference multiplied by $\\gamma^2(1-\\beta^2)$, which is one. The transverse squared terms are unchanged. Reversing the velocity gives the inverse, demonstrating reciprocity within the same sign convention.

The positive branch of the normalization preserves future direction. A formal negative branch would reverse both time and the first spatial coordinate and is not the standard continuous boost from the identity. The finite-speed restriction is essential: setting the frame speed equal to light speed makes the normalization divergent and does not define an inertial coordinate transformation.

In matrix notation the condition is $\\Lambda^T\\eta\\Lambda=\\eta$. Such matrices can also include spatial rotations or discrete reversals. The boosts used here have determinant one and preserve future timelike vectors. It is inaccurate to call every Lorentz matrix a boost; rotations are distinct transformations within the same interval-preserving family.

## What time dilation and length contraction compare

For two ticks of a clock at rest in the primed frame, the transformed spatial difference is zero. The inverse boost gives unprimed time separation equal to the normalization factor times the clock's proper tick interval. This is time dilation: the two compared events lie on one moving clock's worldline.

A rod length is measured by recording its two endpoints simultaneously in the measuring frame. If the rod is at rest in the primed frame with rest length $L_0$, choose simultaneous unprimed endpoint events. The spatial boost gives $L_0=\\gamma L$, so the measured unprimed length is smaller by the same factor. The transformed endpoint events are not simultaneous in the rod's rest frame, but the endpoints have fixed rest coordinates, making that coordinate difference its rest length.

These two derivations use different pairs of events. Treating a simultaneous length measurement as if it were two ticks of one clock mixes their conditions. Neither result says an object sees its own local ruler or clock physically damaged by a coordinate transformation. It compares operational measurements assigned to specified events.

Relativity of simultaneity follows directly from the time formula. Events simultaneous in one frame at separated positions acquire a time difference proportional to velocity and their separation in another. This shift is necessary for the two frames to agree on light propagation; retaining absolute simultaneity would undo the interval-preserving transformation.

## Worked example: simultaneous platform flashes

Two flashes occur at the ends of a stationary platform, separated by length $L$, at the same platform time. A train frame moves in the positive platform direction with speed $v$. Define the event difference as right-end flash minus left-end flash. The boost gives

$$\\Delta t'=-\\gamma vL/c^2.$$

Thus the right-end event has an earlier train coordinate time for positive velocity. This conclusion concerns the assigned times of the source events, not the order in which an observer at an arbitrary train location receives their light. Reception times also depend on the travel distances from each flash to that observer.

If an observer passes the platform midpoint at the instant of the flashes, it moves toward the right-going source location and away from the left source location during propagation. Its actual reception sequence is consistent with the transformed event assignments when light travel is included. One should transform source and reception events separately rather than replacing coordinate simultaneity with raw visual appearance.

The platform's stationary length appears as the source-event separation in this calculation. A train-frame length measurement of the platform would instead require a different simultaneous pair of endpoint events in the train frame. This example therefore does not simultaneously measure both rod lengths; it illustrates exactly the event-choice distinction needed to interpret the contraction formula.

## Velocities and rapidity

Divide the differential spatial boost by the differential time boost to transform a particle velocity. The denominator is positive for a future timelike particle and a subluminal frame speed. Components obey

$$u'_x=\\frac{u_x-v}{1-vu_x/c^2},\\qquad
u'_y=\\frac{u_y}{\\gamma(1-vu_x/c^2)},\\qquad
u'_z=\\frac{u_z}{\\gamma(1-vu_x/c^2)}.$$

All three components refer to the same particle worldline and are divided by the same transformed coordinate-time increment. The denominator is positive because both the frame and particle speeds are subluminal.

For collinear frame compositions, signed dimensionless velocities combine as the sum divided by one plus their product. This differs from simply adding speeds. A light ray retains light speed under the transformation. A massive timelike trajectory remains timelike because its infinitesimal interval is preserved and future time remains positive.

Introduce rapidity by $\\beta=\\tanh\\alpha$, so $\\gamma=\\cosh\\alpha$ and $\\gamma\\beta=\\sinh\\alpha$. The boost matrix then uses hyperbolic sine and cosine. Their addition identities show that collinear rapidities add exactly. Noncollinear boosts do not reduce to this one-dimensional addition rule; they can also change the orientation of spatial axes.

## Worked example: two finite boosts

Compose two collinear boosts whose relative speeds each have magnitude three fifths of light speed in the same direction. The composite dimensionless speed is

$$\\beta_{\\mathrm{tot}}=\\frac{3/5+3/5}{1+9/25}=\\frac{15}{17},\\qquad
\\gamma_{\\mathrm{tot}}=\\frac{17}{8}.$$

The speed remains below light speed. Multiplying the two time-space matrices gives the same normalization: each factor is five fourths, and the time-time entry of the product includes the additional sum of the velocity-product contribution. The result is seventeen eighths, not the square of five fourths alone.

Rapidity supplies a simpler composition parameter. Each individual rapidity is the logarithm of two, so the combined rapidity is the logarithm of four. Taking its hyperbolic tangent reproduces the rational speed above. This exact agreement checks both the sign convention and the distinction between velocity and rapidity.

The example does not assign the second frame's speed relative to the original frame as three fifths. That value was specified relative to the intermediate frame. Changing which frame measures a quoted velocity changes the input data and therefore the calculation. Explicit frame labels prevent the common apparent violation obtained by ordinary addition of two differently measured speeds.

## Causal order and proper time

For a future timelike or null displacement, the time separation multiplied by light speed is at least the spatial separation magnitude. A subluminal boost cannot make its transformed time negative: the time-mixing term is strictly smaller in magnitude than the positive temporal contribution for timelike separation. Causal order is preserved by the future-preserving Lorentz transformations used here.

For spacelike-separated events, a suitable boost along their spatial separation makes them simultaneous, and a larger boost in the same permitted range can reverse their coordinate order. This does not reverse a possible light-speed-or-slower influence, because no such causal worldline connects the spacelike events. The interval classification makes the distinction invariant.

Along a smooth timelike worldline,

$$d\\tau=dt\\sqrt{1-|u|^2/c^2}.$$

The integral is invariant under inertial coordinate changes. Interpreting it as an accelerated clock reading uses the ideal-clock assumption: the clock records this accumulated local proper time rather than an additional instrument-dependent acceleration response. It is not a claim that every real clock operates perfectly under arbitrary acceleration. To prove that an inertial path maximizes proper time between fixed timelike endpoints, transform to the frame in which those endpoints have the same spatial coordinate. Any other future timelike path has proper-time integrand at most one in that frame, giving elapsed proper time no larger than its coordinate-time separation. Equality requires zero spatial velocity almost everywhere, the inertial rest path. This proof also extends to piecewise smooth subluminal paths.

## Worked example: a travelling clock returns

Let an Earth clock remain inertial. A traveller moves outward at three fifths of light speed for five Earth years and returns at the opposite velocity for another five. Idealize the turn as instantaneous; smooth short turns approach the same result when their proper-time contribution is handled explicitly.

The Earth clock advances ten years. The traveller's normalization factor on each cruise leg is five fourths, so its total proper time is eight years. They reunite at one event and can directly compare those elapsed readings. No signal-travel convention is needed for that final local comparison.

At the turn the traveller is three light-years away in the Earth frame. Its outbound inertial simultaneity slice assigns the distant Earth clock a time of $5(1-9/25)$ years, while its inbound inertial slice assigns $5(1+9/25)$ years. The assigned distant time changes from three and one fifth years to six and four fifths, a difference of three and three fifths. This is a change of coordinate comparison caused by switching inertial frames, not an instantaneous physical jump of the Earth clock.

The two paths are not related by one global inertial-frame interchange: the traveller changes velocity and joins two different inertial legs. The proper-time integral accounts for that geometry without a contradiction in reciprocal time dilation. The earlier maximization proof shows why the inertial Earth path accumulates the larger proper time for these common endpoints.

## Phase, Doppler shift and aberration

A wave phase is a scalar assigned to an event. Write its four-wave-vector as $k^\\mu=(\\omega/c,\\mathbf k)$; lowering its index gives the phase $k_\\mu x^\\mu=\\omega t-\\mathbf k\\cdot\\mathbf x$. Our earlier exponential used the negative of this scalar, an equivalent convention when transformed consistently.

For a vacuum wave incident at angle $\\theta$ to a positive-axis boost, transforming the four-wave-vector gives

$$\\omega'=\\gamma\\omega(1-\\beta\\cos\\theta),\\qquad
\\cos\\theta'=\\frac{\\cos\\theta-\\beta}{1-\\beta\\cos\\theta}.$$

The transverse wave-vector component is unchanged, and the transformed wave-vector remains null. Thus the frequency and direction changes are coupled consequences of the same Lorentz transformation. They are not independent correction factors chosen for different parts of the light field.

An observer moving in the same direction as a light ray is chasing its wavefronts and measures a lower frequency. For exact collinearity the frequency factor is the square root of one minus dimensionless speed divided by one plus that speed. The opposite direction gives the inverse factor. A transverse ray in the original frame is not generally transverse in the moving frame, so the phrase “transverse Doppler” requires specifying which frame defines the angle.

## Exercises

### Exercise 1: the inverse boost {#em-lorentz-inverse-boost}

Prove the inverse of the stated standard boost is obtained by replacing velocity with its negative. Verify interval preservation directly without assuming the answer from matrix notation.

**Hint 1.** Insert the primed formulas into the proposed inverse.

**Hint 2.** Mixed terms cancel and the normalization product contains one minus squared dimensionless speed.

**Solution.** Applying the opposite-speed formula produces the original time and first coordinate multiplied by $\\gamma^2(1-\\beta^2)$, with the cross terms canceled. This factor equals one, and transverse coordinates were never changed. The same cancellation in the difference of transformed temporal and spatial squares proves the interval unchanged. The normalization is finite for subluminal speed, so the inverse exists throughout the stated domain. At light speed the formulas do not define a finite map, and the inverse argument cannot be extended by simply substituting that endpoint value.

### Exercise 2: a timelike pair's rest frame {#em-lorentz-timelike-rest-events}

Two events have difference $c\\Delta t=5L$, $\\Delta x=3L$, with other differences zero and $L>0$. Find their invariant proper-time separation and the boost that makes them occur at the same spatial coordinate.

**Hint 1.** Subtract the squared spatial difference from the squared temporal difference.

**Hint 2.** Set the transformed spatial difference to zero.

**Solution.** The squared interval is sixteen times squared length scale, so the inertial proper-time separation is $4L/c$. Setting the transformed spatial separation to zero gives speed three fifths of light speed and normalization five fourths. The transformed temporal separation multiplied by light speed is then four times the length scale, while spatial separation is zero. This is the frame in which the two timelike events can be joined by a stationary inertial clock. A different curved clock path between them would generally accumulate less proper time, not the same endpoint interval value automatically.

### Exercise 3: spacelike simultaneity and order {#em-lorentz-spacelike-order}

Two events instead have $c\\Delta t=3L$, $\\Delta x=5L$, with positive scale and no transverse separation. Find a frame making them simultaneous and explain how another future-preserving boost reverses their coordinate order.

**Hint 1.** Set the transformed temporal difference to zero.

**Hint 2.** The needed dimensionless speed is below one because the separation is spacelike.

**Solution.** A speed three fifths of light speed makes the time difference vanish. Its normalization is five fourths, and the remaining spatial difference is four times the length scale, consistent with the negative squared interval. A slightly larger positive subluminal speed makes the temporal mixing term dominate and gives negative transformed time difference. The events are spacelike, so neither can influence the other by the vacuum light cone. Reversing their coordinate order therefore does not reverse any possible future timelike or null causal trajectory.

### Exercise 4: a transverse particle velocity {#em-lorentz-transverse-velocity}

A particle has velocity $u_x=0$, $u_y=c/2$, $u_z=0$ in one frame. Transform it to a frame boosted at $3c/5$ along the positive first axis, and verify it remains subluminal.

**Hint 1.** The time denominator is one here because the original longitudinal velocity vanishes.

**Hint 2.** The transverse component is still divided by the normalization factor.

**Solution.** The transformed first component is negative three fifths of light speed. The second is two fifths, because the original half-speed is divided by five fourths. The third remains zero. The squared speed is thirteen twenty-fifths of squared light speed, strictly below the causal limit. Keeping the transverse half-speed unchanged would incorrectly omit the transformed time increment. Every component must be divided by the same new coordinate-time differential, even when only one spatial axis is mixed explicitly in the boost matrix.

### Exercise 5: additive rapidity {#em-lorentz-rapidity-composition}

Prove collinear rapidities add by multiplying their hyperbolic boost matrices. Then compose a boost of rapidity $\\log3$ with one of rapidity $\\log2$ and find the resulting dimensionless speed.

**Hint 1.** Use the addition identities for hyperbolic sine and cosine.

**Hint 2.** Hyperbolic tangent of a logarithm can be expressed using the square of its exponential.

**Solution.** Matrix multiplication gives time-time coefficient equal to the cosine hyperbolic of the sum and mixed coefficient negative sine hyperbolic of the sum, so it is the same standard boost with added rapidity. The example has rapidity logarithm of six. Its dimensionless speed is $(36-1)/(36+1)=35/37$, still below one. This computation assumes aligned boost axes and matching passive conventions. Noncollinear compositions cannot be reduced to this scalar addition without an additional spatial rotation.

### Exercise 6: radar coordinates {#em-lorentz-radar-event}

An inertial observer sends a light pulse at clock time two seconds and receives its reflection at eight seconds. Assign the reflection event's radar time and radar distance. State what cannot be inferred about the target's velocity from this single exchange.

**Hint 1.** Radar time is the midpoint of the two clock readings.

**Hint 2.** Radar distance is light speed times half their difference.

**Solution.** The assigned event time is five seconds and its radar distance is light speed multiplied by three seconds. The distance unit is metres when SI light speed is inserted, but retaining the travel-time factor avoids a false unitless length. One exchange locates a reflection event in this inertial radar convention; it does not determine a target velocity. Repeated exchanges or another motion model are needed for that. The calculation also presumes the same identified outgoing and reflected signal and the standard synchronization convention of the chapter.

### Exercise 7: transverse incidence and aberration {#em-lorentz-transverse-aberration}

A vacuum wave travels perpendicular to a positive-axis boost in the original frame. For boost speed $3c/5$, find the frequency ratio and the cosine of its transformed angle. Verify the unchanged transverse wave-vector component.

**Hint 1.** The original angular cosine is zero.

**Hint 2.** Frequency times sine of angle is proportional to the transverse wave-vector component.

**Solution.** The frequency ratio is the boost normalization, five fourths, and the transformed angular cosine is negative three fifths. Its sine is four fifths. Multiplying that sine by the new frequency gives the original frequency, which is exactly the transverse-component invariance for a vacuum wave. A ray transverse in one frame therefore need not be transverse in another. The result follows from transforming one null four-vector, so the frequency and angular factors must be used together rather than mixing an angle measured in one frame with a frequency formula defined in another.

### Exercise 8: the longest clock path {#em-lorentz-inertial-proper-time-maximum}

For two fixed timelike events, prove their connecting inertial worldline has at least as much proper time as every future-directed piecewise smooth timelike path between them. State the equality condition.

**Hint 1.** Transform to the frame where the endpoint spatial coordinates agree.

**Hint 2.** Along any competing path, proper-time rate relative to coordinate time is at most one.

**Solution.** Timelike separation permits the endpoint rest frame constructed from their displacement. The inertial connecting path is stationary there and accumulates the entire endpoint coordinate-time separation. Every competing subluminal future path accumulates the integral of the square root of one minus normalized speed squared, no larger than that separation. Equality requires the speed vanish almost everywhere, and for a piecewise smooth path this gives the same stationary worldline apart from irrelevant parameter changes. Proper time is invariant, so the conclusion holds in every inertial frame. The theorem compares fixed endpoints and timelike paths; it is not a global statement about gravitational time in curved spacetime.

### Exercise 9: invariant wave phase {#em-lorentz-wave-phase-indices}

Explain why the phase is $k_\\mu x^\\mu=\\omega t-\\mathbf k\\cdot\\mathbf x$ in our metric convention. Derive the Doppler frequency formula from a boost of the contravariant wave-vector and state the role of lowering the index.

**Hint 1.** Lowering spatial indices changes their signs.

**Hint 2.** The first contravariant transformed component mixes frequency divided by light speed with longitudinal wave number.

**Solution.** The contravariant temporal component is frequency divided by light speed and the spatial components are the ordinary wave vector. Lowering gives a negative spatial triple, so contraction with spacetime position produces the displayed phase. A standard boost transforms the temporal component to the normalization times its original value minus dimensionless speed times longitudinal wave number. Multiplying by light speed and using the vacuum relation between wave-number magnitude and frequency gives the stated Doppler expression. Transforming both contravariant objects with the same matrix while contracting them as if both indices were lower would not preserve this scalar; the metric supplies the required distinction.

### Exercise 10: no light-ray rest frame {#em-lorentz-no-null-rest-frame}

Prove that no finite Lorentz boost makes a nonzero vacuum wave-vector have zero spatial part. Explain why taking a speed limit equal to light speed does not supply a missing inertial rest frame.

**Hint 1.** The wave-vector is nonzero and null.

**Hint 2.** A null vector with zero spatial part must also have zero temporal part.

**Solution.** Lorentz transformations preserve the null norm and are invertible. If the transformed spatial part vanished, its null norm would force the temporal part to vanish as well, making the entire transformed vector zero. Invertibility would then make the original vector zero, contrary to hypothesis. The apparent limiting procedure at light speed is not a finite Lorentz transformation because its normalization diverges. Frequencies can become arbitrarily small for observers chasing the wave with speeds approaching the limit, but no permitted inertial observer reaches a wave rest frame.
`;export{e as default};