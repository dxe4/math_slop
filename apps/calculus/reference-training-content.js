// Additive reference and retrieval material; original bank entries remain unchanged.
export const referenceSections={
  "algebra": [
    {
      "title": "Hyperbolic functions and real inverse branches",
      "paragraphs": [
        "For real $t$, $\\sinh t=(e^t-e^{-t})/2$, $\\cosh t=(e^t+e^{-t})/2$, and $\\tanh t=\\sinh t/\\cosh t$. Thus $\\cosh^2t-\\sinh^2t=1$. The ranges are $\\sinh(\\mathbb R)=\\mathbb R$, $\\cosh(\\mathbb R)=[1,\\infty)$, and $\\tanh(\\mathbb R)=(-1,1)$. The hyperbolic parameter is dimensionless; it is neither a circular angle nor arc length.",
        "The real inverses use specified branches: $\\operatorname{arsinh}x=\\ln(x+\\sqrt{1+x^2})$ for every real $x$; $\\operatorname{arcosh}x=\\ln(x+\\sqrt{x^2-1})$ for $x\\ge1$, returning a nonnegative value; and $\\operatorname{artanh}x=\\frac12\\ln((1+x)/(1-x))$ for $-1<x<1$. Consequently $\\operatorname{arcosh}(\\cosh t)=|t|$; $\\operatorname{artanh}$ excludes its limiting endpoints."
      ],
      "links": [
        {
          "label": "Read lesson 02.7",
          "href": "#chapter/02/lesson/7"
        }
      ]
    }
  ],
  "tables": [
    {
      "title": "Hyperbolic derivatives and branches",
      "paragraphs": [
        "For a differentiable inner function, multiply the applicable outer derivative by its derivative and check the inner range first. The value $\\operatorname{arcosh}1=0$ exists, but its right slope is unbounded, so its displayed derivative does not extend to $1$. A composition at an inner value of $1$ needs its own one-sided analysis."
      ],
      "table": {
        "headers": [
          "Function",
          "Derivative",
          "Conditions"
        ],
        "rows": [
          [
            "$\\sinh x$",
            "$\\cosh x$",
            "real $x$"
          ],
          [
            "$\\cosh x$",
            "$\\sinh x$",
            "real $x$"
          ],
          [
            "$\\tanh x$",
            "$1/\\cosh^2x$",
            "real $x$"
          ],
          [
            "$\\operatorname{arsinh}x$",
            "$1/\\sqrt{1+x^2}$",
            "real $x$"
          ],
          [
            "$\\operatorname{arcosh}x$",
            "$1/\\sqrt{x^2-1}$",
            "$x>1$"
          ],
          [
            "$\\operatorname{artanh}x$",
            "$1/(1-x^2)$",
            "$|x|<1$"
          ]
        ]
      },
      "links": [
        {
          "label": "Read lesson 06.6",
          "href": "#chapter/06/lesson/6"
        },
        {
          "label": "Read lesson 02.7",
          "href": "#chapter/02/lesson/7"
        }
      ]
    },
    {
      "title": "Hyperbolic radical antiderivatives",
      "paragraphs": [
        "For fixed $a>0$, $\\int\\sqrt{a^2+x^2}\\,dx=[x\\sqrt{a^2+x^2}+a^2\\operatorname{arsinh}(x/a)]/2+C$ on $\\mathbb R$. Also $\\int dx/\\sqrt{a^2+x^2}=\\operatorname{arsinh}(x/a)+C$. On either interval $|x|>a$, $\\int dx/\\sqrt{x^2-a^2}=\\operatorname{sgn}(x)\\operatorname{arcosh}(|x|/a)+C$; choose a separate constant on each interval. At $x=\\pm a$ the last integrand is undefined, so an integral ending there is improper.",
        "Differentiating the first expression makes its two numerator derivatives sum to $2\\sqrt{a^2+x^2}$. In the last expression, the sign and absolute value give the positive integrand on both branches. The substitution $x=a\\sinh t$ uses $\\sqrt{a^2+x^2}=a\\cosh t$ since $a>0$ and $\\cosh t>0$; change definite-integral bounds as well."
      ],
      "links": [
        {
          "label": "Read lesson 12.7",
          "href": "#chapter/12/lesson/7"
        }
      ]
    }
  ],
  "theorems": [
    {
      "title": "Regular implicit surfaces",
      "paragraphs": [
        "If $F(P)=0$, $F$ is continuously differentiable near $P$, and $\\nabla F(P)\\ne0$, the level set has local surface structure and tangent plane $\\nabla F(P)\\cdot(\\mathbf x-P)=0$. The chain rule first proves only that velocities of curves on the level set are orthogonal to the gradient. A nonzero partial derivative and the implicit function theorem supply a local graph and two independent tangent directions, completing the plane argument.",
        "If the gradient vanishes, this sufficient theorem gives no conclusion about the actual set: a cone apex has no unique tangent plane, while $F=z^3=0$ still describes the plane $z=0$. Inspect the set separately."
      ],
      "links": [
        {
          "label": "Read lesson 21.6",
          "href": "#chapter/21/lesson/6"
        }
      ]
    },
    {
      "title": "Wronskian interval and forced solutions",
      "paragraphs": [
        "For $y^{\\prime\\prime}+p(t)y^{\\prime}+q(t)y=g(t)$, work on one connected open interval $I$ where $p,q,g$ are continuous. Let $y_1,y_2$ solve the homogeneous equation and let $W=y_1y_2^{\\prime}-y_1^{\\prime} y_2$ be nonzero at one $t_0\\in I$. Abel’s identity $W^{\\prime}=-pW$ makes $W$ nonzero throughout $I$.",
        "Variation of parameters uses $u_1^{\\prime}=-y_2g/W$, $u_2^{\\prime}=y_1g/W$, integrated from $t_0$; the resulting particular solution has zero value and slope at $t_0$. Divide an equation with a nonunit leading coefficient before using these formulas. A coefficient or forcing pole separates valid intervals."
      ],
      "links": [
        {
          "label": "Read lesson 27.8",
          "href": "#chapter/27/lesson/8"
        },
        {
          "label": "Read lesson 27.7",
          "href": "#chapter/27/lesson/7"
        }
      ]
    },
    {
      "title": "Power series as ODE solutions",
      "paragraphs": [
        "A power series with positive radius $R$ and its derivative series converge uniformly on compact subintervals of $|t-a|<R$; repeated differentiation is valid there and retains the same open radius. Test finite endpoints separately.",
        "A recurrence obtained by matching ODE coefficients is initially a formal candidate: prove a positive convergence radius and convergence of every derivative series required by the equation, then substitute and check initial data. A truncated polynomial’s residual and its error from the exact solution are different quantities."
      ],
      "links": [
        {
          "label": "Read lesson 17.2",
          "href": "#chapter/17/lesson/2"
        },
        {
          "label": "Read lesson 17.7",
          "href": "#chapter/17/lesson/7"
        },
        {
          "label": "Read lesson 27.9",
          "href": "#chapter/27/lesson/9"
        }
      ]
    }
  ],
  "numerics": [
    {
      "title": "Evaluating an inverse hyperbolic logarithm",
      "paragraphs": [
        "The real identity $\\operatorname{arsinh}x=\\ln(x+\\sqrt{x^2+1})$ is valid for every real $x$, and its logarithm argument is strictly positive in exact arithmetic. Direct floating-point evaluation can cancel to zero for a large negative $x$; computing $x^2$ can also overflow. Oddness gives $\\operatorname{arsinh}x=-\\operatorname{arsinh}(-x)$ for negative $x$. In a JavaScript laboratory, `Math.asinh(x)` is the direct numerical choice. Keep a valid analytic identity distinct from an evaluation recipe."
      ],
      "links": [
        {
          "label": "Read lesson 02.7",
          "href": "#chapter/02/lesson/7"
        }
      ]
    }
  ],
  "modeling": [
    {
      "title": "World geometry and its projection",
      "paragraphs": [
        "A spatial point is a world triple $(x,y,z)$. A top orthographic projection keeps $(x,y)$ and loses $z$; other views can also overlap distinct world points. A trace at world height $z=z_0$ is an intersection with that plane, not the surface’s projected shadow. Compute speed, tangent, normal, curvature, and intersection claims from world coordinates and equations; a projected image alone cannot certify them.",
        "In $(R\\cos t,R\\sin t,ht)$, dimensionless $t$ gives $h$ units of length per radian and rise $2\\pi h$ per turn. Physical time requires a separate time law."
      ],
      "links": [
        {
          "label": "Read lesson 19.7",
          "href": "#chapter/19/lesson/7"
        },
        {
          "label": "Read lesson 20.7",
          "href": "#chapter/20/lesson/7"
        },
        {
          "label": "Read lesson 21.6",
          "href": "#chapter/21/lesson/6"
        }
      ]
    },
    {
      "title": "Units in a forced oscillator and local series",
      "paragraphs": [
        "In $mx^{\\prime\\prime}+bx^{\\prime}+kx=F(t)$, with time in seconds and displacement in metres, $m$ is in kilograms, $b$ in newton-seconds per metre, $k$ in newtons per metre, and $F$ in newtons. After division by $m$, $p=b/m$ has units $1/\\mathrm s$, $q=k/m$ has units $1/\\mathrm s^2$, and $g=F/m$ has units $\\mathrm m/\\mathrm s^2$; every term in $x^{\\prime\\prime}+px^{\\prime}+qx=g$ is acceleration.",
        "If a displacement series is $\\sum a_n(t-t_0)^n$, $a_n$ has units $\\mathrm m/\\mathrm s^n$, and its radius has time units. Units check consistency; they do not prove a solution."
      ],
      "links": [
        {
          "label": "Read lesson 27.7",
          "href": "#chapter/27/lesson/7"
        },
        {
          "label": "Read lesson 27.8",
          "href": "#chapter/27/lesson/8"
        },
        {
          "label": "Read lesson 27.9",
          "href": "#chapter/27/lesson/9"
        }
      ]
    }
  ],
  "notation": [
    {
      "title": "Inverse hyperbolic notation",
      "paragraphs": [
        "$\\operatorname{arsinh}$, $\\operatorname{arcosh}$, and $\\operatorname{artanh}$ denote inverse functions on the real branches stated in Appendix A. In particular, $\\operatorname{arcosh}$ chooses the nonnegative input to $\\cosh$, and $\\operatorname{artanh}$ accepts only $(-1,1)$. The letters “ar” indicate inverse functions, not reciprocals."
      ],
      "links": [
        {
          "label": "Read lesson 02.7",
          "href": "#chapter/02/lesson/7"
        },
        {
          "label": "Read lesson 06.6",
          "href": "#chapter/06/lesson/6"
        }
      ]
    },
    {
      "title": "Conic geometry",
      "paragraphs": [
        "A conic compares distance to a focus with distance to a directrix by a positive, dimensionless eccentricity $e$. For focus $(0,0)$ and directrix $x=d>0$, the locus is $\\sqrt{x^2+y^2}=e|x-d|$: $0<e<1$ gives an ellipse, $e=1$ a parabola, and $e>1$ a hyperbola with two branches. A circle of radius $p$ is the limit $e\\to0^+$ with $ed=p$ and $d\\to\\infty$; setting $e=0$ at finite $d$ gives only the focus.",
        "For $X=x-h,Y=y-k$, a horizontal ellipse $X^2/a^2+Y^2/b^2=1$, $a>b>0$, has $c^2=a^2-b^2$. A horizontal hyperbola $X^2/a^2-Y^2/b^2=1$ has $c^2=a^2+b^2$, vertices $X=\\pm a$, domains $X\\le-a$ and $X\\ge a$, and asymptotes $Y=\\pm(b/a)X$. A horizontal parabola $Y^2=4pX$, $p\\ne0$, has focus $(h+p,k)$ and directrix $x=h-p$. These are translated, axis-aligned forms; a mixed $XY$ term needs separate rotation analysis.",
        "For $e>1$, a positive radius on the focus-side branch is $R=ed/(1+e\\cos\\theta)$ where $1+e\\cos\\theta>0$; the other branch needs $R=ed/(e\\cos\\phi-1)$ where $e\\cos\\phi>1$. A zero denominator gives no finite point. A signed-radius convention can encode both, but its negative radius is not a negative distance."
      ],
      "links": [
        {
          "label": "Read lesson 18.7",
          "href": "#chapter/18/lesson/7"
        },
        {
          "label": "Read lesson 18.8",
          "href": "#chapter/18/lesson/8"
        },
        {
          "label": "Read lesson 18.9",
          "href": "#chapter/18/lesson/9"
        }
      ]
    },
    {
      "title": "Quadric relations and traces",
      "paragraphs": [
        "With $X=x-h,Y=y-j,Z=z-k$ and $a,b,c>0$, put $q=X^2/a^2+Y^2/b^2$ and $w=Z/c$. The standard axis-aligned relations are ellipsoid $q+w^2=1$, one-sheet hyperboloid $q-w^2=1$, two-sheet hyperboloid $w^2-q=1$, and double cone $q=w^2$. The elliptic paraboloid $w=q$ and hyperbolic paraboloid $w=X^2/a^2-Y^2/b^2$ are global height graphs. An ellipsoid’s interior base points have two heights; its full relation is not one graph $z=f(x,y)$. The two-sheet hyperboloid likewise has two separate graph branches.",
        "A horizontal trace fixes the world plane $z=z_0$, hence $w=(z_0-k)/c$, before classifying the equation in $X,Y$. A negative value required of $q$ means an empty trace, while $q=0$ is a point. These names cover the stated translated, axis-aligned standard families, not every rotated or cross-term quadratic relation. A finite rendering cannot establish an unbounded surface’s full extent."
      ],
      "links": [
        {
          "label": "Read lesson 20.7",
          "href": "#chapter/20/lesson/7"
        },
        {
          "label": "Read lesson 20.8",
          "href": "#chapter/20/lesson/8"
        },
        {
          "label": "Read lesson 20.9",
          "href": "#chapter/20/lesson/9"
        }
      ]
    }
  ],
  "teaching": [
    {
      "title": "New checks and prior reading records",
      "paragraphs": [
        "Every chapter retains its original five concept checks; selected chapters now have additional unseen checks. A saved chapter visit records navigation, not mastery of lessons added later. Revisit the new written reasoning and compare your own solution before recording an outcome."
      ]
    }
  ]
};
export const additionalConceptChecks={
  "02": [
    {
      "prompt": "For real $t$, what solves $\\cosh t=5/4$?",
      "options": [
        "$t=\\pm\\operatorname{arcosh}(5/4)$",
        "Only $t=\\operatorname{arcosh}(5/4)$",
        "Every real $t$"
      ],
      "correct": 0,
      "explanation": "Cosh is even; arcosh names the nonnegative principal value.",
      "misconceptions": {
        "1": "This omits the negative input with the same cosh value.",
        "2": "Cosh varies and equals $5/4$ at only two inputs."
      },
      "repair": {
        "label": "Review Hyperbolic functions and real inverse branches",
        "href": "#chapter/02/lesson/7"
      }
    }
  ],
  "06": [
    {
      "prompt": "At $x=1$, which statement about real $\\operatorname{arcosh}x$ is correct?",
      "options": [
        "It is defined, but has no finite derivative there",
        "It is undefined there",
        "Its derivative there is zero"
      ],
      "correct": 0,
      "explanation": "The value is zero, while $1/\\sqrt{x^2-1}$ grows without bound as $x\\downarrow1$.",
      "misconceptions": {
        "1": "The principal inverse includes its endpoint.",
        "2": "A denominator tending to zero does not give zero slope."
      },
      "repair": {
        "label": "Review Derivatives of hyperbolic functions and their inverses",
        "href": "#chapter/06/lesson/6"
      }
    }
  ],
  "12": [
    {
      "prompt": "With $x=\\sinh t$ for real $t$, what is $\\sqrt{1+x^2}$?",
      "options": [
        "$\\cosh t$",
        "$\\sinh t$",
        "$|\\sinh t|$"
      ],
      "correct": 0,
      "explanation": "The identity gives $\\cosh^2t$, and $\\cosh t>0$.",
      "misconceptions": {
        "1": "Sinh can be negative and is not this square root.",
        "2": "$|\\sinh t|$ can be zero while the root is at least one."
      },
      "repair": {
        "label": "Review A radical becomes a hyperbolic square",
        "href": "#chapter/12/lesson/7"
      }
    }
  ],
  "17": [
    {
      "prompt": "In $(1-t)y^{\\prime}=y$, $y(0)=1$, matching coefficients gives $a_{n+1}=a_n=1$. Where does the resulting power series verify the ODE?",
      "options": [
        "$|t|<1$",
        "$t<1$",
        "Every real $t$ except $1$"
      ],
      "correct": 0,
      "explanation": "It is the geometric series with radius $1$; there it converges and its derivative series verifies the ODE.",
      "misconceptions": {
        "1": "The rational solution has a wider interval, but this series does not converge there.",
        "2": "A formal recurrence does not validate a series outside its radius."
      },
      "repair": {
        "label": "Review From a coefficient rule to a function",
        "href": "#chapter/17/lesson/7"
      }
    }
  ],
  "18": [
    {
      "prompt": "For $e>1$, what does positive $R=ed/(1+e\\cos\\theta)$, used only where its denominator is positive, cover?",
      "options": [
        "The focus-side branch only",
        "Both hyperbola branches",
        "The distant branch only"
      ],
      "correct": 0,
      "explanation": "The second branch needs a second positive-radius formula or a signed-radius interpretation.",
      "misconceptions": {
        "1": "Discarding the denominator restriction does not add valid positive-radius points.",
        "2": "The displayed positive-radius derivation uses the focus side of the directrix."
      },
      "repair": {
        "label": "Review Polar conics and the missing branch",
        "href": "#chapter/18/lesson/9"
      }
    }
  ],
  "19": [
    {
      "prompt": "Two space curves cross in a top projection. What establishes an intersection in space?",
      "options": [
        "Matching all three world coordinates at points on both curves",
        "Matching $x$ and $y$ only",
        "Matching parameter values only"
      ],
      "correct": 0,
      "explanation": "The same three-dimensional point must occur on each curve.",
      "misconceptions": {
        "1": "Different heights can share a top projection.",
        "2": "Parameters need not agree; equal values also need not produce equal positions."
      },
      "repair": {
        "label": "Review A space curve has a world-coordinate tangent",
        "href": "#chapter/19/lesson/7"
      }
    }
  ],
  "20": [
    {
      "prompt": "For $X^2/4+Y^2/9-Z^2/16=1$, which horizontal trace claim holds?",
      "options": [
        "Every real $Z$ gives an ellipse",
        "No trace at $Z=0$",
        "Only $Z\\ge4$ has a trace"
      ],
      "correct": 0,
      "explanation": "The right side is $1+Z^2/16>0$ at every real height.",
      "misconceptions": {
        "1": "The central trace has semiaxes $2$ and $3$.",
        "2": "Negative and small positive heights also occur."
      },
      "repair": {
        "label": "Review Signs distinguish hyperboloids and cones",
        "href": "#chapter/20/lesson/8"
      }
    }
  ],
  "21": [
    {
      "prompt": "When does the regular-level theorem supply $\\nabla F(P)$ as a surface normal?",
      "options": [
        "$F$ is $C^1$ near $P$ and $\\nabla F(P)\\ne0$",
        "Whenever $P$ lies on the level",
        "Whenever one partial exists"
      ],
      "correct": 0,
      "explanation": "The implicit function theorem then supplies a local graph and tangent plane.",
      "misconceptions": {
        "1": "A zero-gradient point requires separate inspection.",
        "2": "One partial does not supply a full gradient or the needed regularity."
      },
      "repair": {
        "label": "Review Normals and tangent planes on regular level surfaces",
        "href": "#chapter/21/lesson/6"
      }
    }
  ],
  "27": [
    {
      "prompt": "For $y^{\\prime\\prime}+4y=\\cos(2t)$, which resonant trial fits?",
      "options": [
        "A multiple of $t\\sin(2t)$",
        "$\\cos(2t)$ alone",
        "$t\\cos(2t)$"
      ],
      "correct": 0,
      "explanation": "The operator applied to $t\\sin(2t)$ produces cosine forcing.",
      "misconceptions": {
        "1": "The unmultiplied cosine is homogeneous.",
        "2": "The last trial produces sine forcing."
      },
      "repair": {
        "label": "Review Constructing forced solutions",
        "href": "#chapter/27/lesson/7"
      }
    },
    {
      "prompt": "Why use a pair with nonzero Wronskian on the working interval?",
      "options": [
        "The parameter-derivative system is solvable throughout that interval",
        "It makes forcing zero",
        "It makes a solution constant"
      ],
      "correct": 0,
      "explanation": "The Wronskian is the system determinant; Abel’s identity propagates nonzero values on the connected coefficient interval.",
      "misconceptions": {
        "1": "The forcing is prescribed independently.",
        "2": "Neither homogeneous solution needs to be constant."
      },
      "repair": {
        "label": "Review Variation of parameters",
        "href": "#chapter/27/lesson/8"
      }
    },
    {
      "prompt": "Formal coefficient cancellation in a series ODE leaves what to prove?",
      "options": [
        "Convergence of the function and needed derivative series on the claimed interval",
        "Only the constant coefficient",
        "Only one numerical value"
      ],
      "correct": 0,
      "explanation": "Termwise operations require an interval of validity, and initial data must be checked.",
      "misconceptions": {
        "1": "One coefficient cannot establish convergence.",
        "2": "One sample cannot establish an ODE identity."
      },
      "repair": {
        "label": "Review Building an ODE solution from a series",
        "href": "#chapter/27/lesson/9"
      }
    }
  ],
  "28": [
    {
      "prompt": "For $y^{\\prime}=-10y$, $y(0)=1$, one implicit Euler step of $h=0.3$ is positive and decaying. What follows about accuracy at $t=0.3$?",
      "options": [
        "Nothing from sign alone; compare $1/4$ with $e^{-3}$",
        "It is accurate because it is positive",
        "It is exact because it decays"
      ],
      "correct": 0,
      "explanation": "$1/4$ differs substantially from $e^{-3}$; sign and decay alone do not bound amplitude error.",
      "misconceptions": {
        "1": "Positivity does not bound amplitude error.",
        "2": "Decay does not imply equality with the exact flow."
      },
      "repair": {
        "label": "Review Stable is not the same as accurate: Euler on fast decay",
        "href": "#chapter/28/lesson/6"
      }
    }
  ]
};
