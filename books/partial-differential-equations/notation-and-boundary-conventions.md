
# Notation and Boundary Conventions

Functions are real-valued unless a complex Fourier representation is explicitly introduced. Position is x or a spatial vector, and time is t. The Laplacian sums spatial second derivatives only when a time variable is present. Diffusivity kappa is positive; wave speed c is positive and has different physical units.

A classical solution has the derivatives named in its theorem on the specified open domain. Continuity on a closure does not automatically extend its derivatives there. A boundary integration requires its own regularity statement.

The parabolic boundary consists of the initial spatial closure and the lateral spatial boundary through time. The final interior slice is excluded. Dirichlet data prescribe values, Neumann data prescribe outward normal derivatives, and Robin data combine them. On a left endpoint the outward normal derivative has the opposite sign to the coordinate derivative.

The second-order two-variable convention is a u_xx + 2b u_xy + c u_yy. The principal matrix therefore has off-diagonal entry b. Its determinant, not a discriminant copied from a different mixed-term convention, determines the stated elliptic/hyperbolic/parabolic classification.

The whole-line transform is fhat(ξ)=∫f(x)e^−ixξdx, with inverse factor 1/(2π). The spatial elliptic sign is −Δu=f, so its Dirichlet Green function is positive and its Poisson kernel is minus the outward normal derivative in the boundary variable. In regular Sturm–Liouville problems the inner product includes the positive weight w. Numerical mesh widths are h in space and k in time; the explicit heat ratio is κk/h² and the wave Courant number is ck/h.
