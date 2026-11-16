// Curated scalar checkpoints for canonical written problems. These verify a
// numerical result only; the linked solution still carries the reasoning.
export const numericChecks={
  '01':{
    6:{answer:16/5,label:'Greatest permitted value of x',example:'3.2'},
    14:{answer:9,label:'Largest value in the range',example:'9'},
    22:{answer:1,label:'Greatest input in the natural real domain',example:'1'},
    26:{answer:2.5,label:'Voltage in volts',example:'2.5'}
  },
  '02':{
    6:{answer:3,label:'Real solution x',example:'3'},
    13:{answer:Math.PI,label:'Arc length in metres',example:'pi',absoluteTolerance:5e-5},
    14:{answer:1.5*Math.PI,label:'Sector area in square metres',example:'1.5*pi',absoluteTolerance:5e-5},
    27:{answer:1/12,label:'Exact grade (rise divided by horizontal run)',example:'1/12'}
  },
  '03':{
    3:{answer:10,label:'Value of g(−2)',example:'10'},
    9:{answer:7,label:'Number of sampled points',example:'7',integer:true},
    13:{answer:0.02,label:'Absolute error in metres',example:'0.02'},
    25:{answer:1/2,label:'Limit value of Q(h)',example:'1/2'}
  },
  '04':{
    1:{answer:4,label:'Limit value as x approaches 2',example:'4'},
    4:{answer:6,label:'Limit value',example:'6'},
    7:{answer:0.25,label:'Limit value',example:'1/4'},
    19:{answer:3,label:'Limit value at positive infinity',example:'3'}
  },
  '05':{
    2:{answer:4,label:'Average speed in metres per second',example:'4'},
    9:{answer:0.25,label:'Tangent slope at x=4',example:'1/4'},
    16:{answer:2,label:'Required slope parameter m',example:'2'},
    27:{answer:13,label:'Total distance in position units',example:'13'}
  },
  '06':{
    6:{answer:6,label:'Value of y′(1)',example:'6'},
    8:{answer:Math.E,label:'Input where the derivative is zero',example:'e',absoluteTolerance:5e-5},
    23:{answer:1/5,label:'Inverse derivative at 3',example:'1/5'},
    25:{answer:-4/5,label:'Implicit slope at (1, 2)',example:'-4/5'}
  },
  '07':{
    1:{answer:4.8*Math.PI,label:'Area rate in square centimetres per second',example:'4.8*pi',absoluteTolerance:5e-5},
    5:{answer:-0.375,label:'Top-end rate in metres per second',example:'-0.375'},
    22:{answer:2,label:'Elasticity (dimensionless)',example:'2'},
    27:{answer:601/120000,label:'Remainder-to-differential ratio',example:'601/120000'}
  },
  '08':{
    8:{answer:2,label:'Mean-value point c',example:'2'},
    10:{answer:Math.PI/2,label:'Rolle point c',example:'pi/2',absoluteTolerance:5e-5},
    13:{answer:-2,label:'Local minimum value',example:'-2'},
    23:{answer:-1/6,label:'Two-sided limit',example:'-1/6'}
  },
  '09':{
    3:{answer:450,label:'Largest area in square metres',example:'450'},
    11:{answer:19,label:'Smallest number of completed halvings',example:'19',integer:true},
    19:{answer:7/4,label:'New value after one Newton update',example:'7/4'},
    28:{answer:432,label:'Maximum volume in cubic centimetres',example:'432'}
  },
  '10':{
    1:{answer:12,label:'Accumulated amount in litres',example:'12'},
    6:{answer:13/4,label:'Right-tag Riemann sum',example:'13/4'},
    16:{answer:-9,label:'Oriented integral value',example:'-9'},
    23:{answer:1/3,label:'Average value',example:'1/3',absoluteTolerance:5e-5}
  },
  '11':{
    5:{answer:17,label:'Final volume in litres',example:'17'},
    13:{answer:4,label:'Final position in metres',example:'4'},
    14:{answer:8,label:'Definite integral value',example:'8'},
    25:{answer:Math.log(9),label:'Definite integral value',example:'2.197225',absoluteTolerance:5e-7,relativeTolerance:1e-8}
  },
  '12':{
    2:{answer:0.25,label:'Definite integral value',example:'1/4'},
    7:{answer:1,label:'Definite integral value',example:'1'},
    12:{answer:1,label:'Definite integral value',example:'1'},
    29:{answer:2-Math.PI/2,label:'Definite integral value',example:'0.4292',absoluteTolerance:5e-5}
  },
  '13':{
    1:{answer:2,label:'Geometric area in square units',example:'2'},
    4:{answer:4.5,label:'Enclosed area in square units',example:'4.5'},
    8:{answer:5*Math.PI/3,label:'Volume in cubic units',example:'5*pi/3',absoluteTolerance:5e-5},
    29:{answer:170040,label:'Gauge-pressure moment in newton metres',example:'170040'}
  },
  '14':{
    3:{answer:0.375,label:'Two-panel trapezoid estimate',example:'3/8'},
    6:{answer:29,label:'Least panel count certified by the stated bound',example:'29',integer:true},
    14:{answer:100,label:'Improper integral value',example:'100'},
    28:{answer:3,label:'Improper integral value',example:'3'}
  },
  '15':{
    2:{answer:51,label:'Smallest whole-number N',example:'51',integer:true},
    7:{answer:1,label:'Sequence limit',example:'1'},
    12:{answer:7.5,label:'Geometric-series sum',example:'15/2'},
    27:{answer:3/4,label:'Telescoping-series sum',example:'3/4'}
  },
  '16':{
    6:{answer:99,label:'Least term count certified by the alternating bound',example:'99',integer:true},
    13:{answer:2/3,label:'Root-test limit',example:'2/3'},
    28:{answer:2000,label:'Least term count certified by the stated bound',example:'2000',integer:true},
    29:{answer:44,label:'Least term count certified by alternating bound',example:'44',integer:true}
  },
  '17':{
    1:{answer:2,label:'Radius of convergence',example:'2'},
    2:{answer:1,label:'Radius of convergence',example:'1'},
    4:{answer:0,label:'Radius of convergence',example:'0'},
    20:{answer:Math.pow(0.2,4)/24,label:'Taylor error bound',example:'0.0000666666667',relativeTolerance:1e-8,absoluteTolerance:5e-9}
  },
  '18':{
    5:{answer:3,label:'Speed at t=π/2',example:'3'},
    13:{answer:3*Math.PI,label:'Semicircle length',example:'3*pi',absoluteTolerance:5e-5},
    19:{answer:3*Math.PI/2,label:'Enclosed area in square coordinate units',example:'1.5*pi',absoluteTolerance:5e-5},
    28:{answer:2,label:'Return time in seconds',example:'2'}
  },
  '19':{
    2:{answer:Math.sqrt(17),label:'Vector norm',example:'sqrt(17)',absoluteTolerance:5e-5},
    10:{answer:Math.sqrt(21)/2,label:'Triangle area',example:'sqrt(21)/2',absoluteTolerance:5e-5},
    15:{answer:Math.sqrt(3)/3,label:'Plane distance in coordinate length units',example:'sqrt(3)/3',absoluteTolerance:5e-5},
    23:{answer:2.5,label:'Radius of curvature in metres',example:'2.5'}
  },
  '20':{
    16:{answer:0.5,label:'Path value',example:'1/2'},
    17:{answer:0,label:'Limit along y=x',example:'0'},
    19:{answer:0.08,label:'Linear estimate of the temperature change',example:'0.08'},
    29:{answer:2/5,label:'Approach value along y=2x²',example:'2/5'}
  },
  '21':{
    1:{answer:1.02,label:'Tangent-plane estimate at (1.01, 0.02)',example:'1.02'},
    10:{answer:0.01,label:'Differential estimate of the area change',example:'0.01'},
    20:{answer:38/5,label:'Directional derivative',example:'38/5'},
    25:{answer:1.045,label:'Second-order estimate of f(0.1, 0.2)',example:'1.045'}
  },
  '22':{
    4:{answer:0.5,label:'Minimum value',example:'1/2'},
    13:{answer:2,label:'Maximum value',example:'2'},
    18:{answer:Math.sqrt(5),label:'Maximum value on the ellipse',example:'sqrt(5)',absoluteTolerance:5e-5},
    29:{answer:Math.sqrt(2),label:'Supremum on the open unit disk',example:'sqrt(2)',absoluteTolerance:5e-5}
  },
  '23':{
    1:{answer:4,label:'Double integral value',example:'4'},
    2:{answer:3,label:'Volume in cubic metres',example:'3'},
    17:{answer:9,label:'Total mass in kilograms',example:'9'},
    26:{answer:7/8,label:'Fraction of mass with x at least 0.5 m',example:'7/8'}
  },
  '24':{
    1:{answer:6*Math.PI,label:'Ellipse area',example:'6*pi',absoluteTolerance:5e-5},
    3:{answer:-6,label:'Signed Jacobian determinant',example:'-6'},
    13:{answer:9*Math.PI,label:'Volume inside the cone in cubic units',example:'9*pi',absoluteTolerance:5e-5},
    24:{answer:Math.exp(-4),label:'Probability that radius exceeds 2',example:'0.01831564'}
  },
  '25':{
    5:{answer:Math.SQRT2,label:'Scalar line integral',example:'sqrt(2)',absoluteTolerance:5e-5},
    6:{answer:-2*Math.PI,label:'Clockwise circulation',example:'-2*pi',absoluteTolerance:5e-5},
    15:{answer:13,label:'Work',example:'13'},
    30:{answer:4*Math.PI,label:'Circulation for winding number 2',example:'4*pi',absoluteTolerance:5e-5}
  },
  '26':{
    1:{answer:0.5,label:'Counterclockwise circulation',example:'1/2'},
    8:{answer:Math.sqrt(6),label:'Surface area in square coordinate units',example:'sqrt(6)',absoluteTolerance:5e-5},
    11:{answer:-18*Math.PI,label:'Clockwise circulation',example:'-18*pi',absoluteTolerance:5e-5},
    20:{answer:3,label:'Outward flux',example:'3'}
  },
  '27':{
    3:{answer:1,label:'Slope at (2,1)',example:'1'},
    7:{answer:Math.log(2)/2,label:'Half-life in hours',example:'0.3465735903',relativeTolerance:1e-8,absoluteTolerance:5e-7},
    13:{answer:3,label:'Limiting value of y',example:'3'},
    28:{answer:Math.log(36)/0.4,label:'First reach time in years',example:'8.96',absoluteTolerance:0.005}
  },
  '28':{
    2:{answer:1.1,label:'Euler value after one step',example:'1.1'},
    3:{answer:1.11,label:'Heun value after one step',example:'1.11'},
    8:{answer:4,label:'Classical RK4 f-evaluations per fixed step',example:'4',integer:true},
    25:{answer:5.0625,label:'Euler value y4 at t=1',example:'5.0625'}
  }
};

// Additive scalar checkpoints: matching these values never marks a written solution solved.
numericChecks['12'][36]={answer:Math.asinh(1),label:'Definite integral value',example:'0.881373587',absoluteTolerance:5e-7};
numericChecks['20'][41]={answer:96*Math.PI/25,label:'Horizontal sectional area at z=5.6, in square metres',example:'3.84*pi',absoluteTolerance:5e-5};
numericChecks['28'][29]={answer:1/4,label:'One-step implicit Euler approximation at t=0.3',example:'1/4',absoluteTolerance:0};
