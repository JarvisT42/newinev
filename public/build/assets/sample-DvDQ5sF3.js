var qe=Object.defineProperty;var $e=(A,R,B)=>R in A?qe(A,R,{enumerable:!0,configurable:!0,writable:!0,value:B}):A[R]=B;var b=(A,R,B)=>$e(A,typeof R!="symbol"?R+"":R,B);import{r as de,j as Y}from"./app-CjvJIuIz.js";function Je(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}function Qe({SIM_RESOLUTION:A=128,DYE_RESOLUTION:R=1440,CAPTURE_RESOLUTION:B=512,DENSITY_DISSIPATION:q=3.5,VELOCITY_DISSIPATION:$=2,PRESSURE:J=.1,PRESSURE_ITERATIONS:Q=20,CURL:Z=3,SPLAT_RADIUS:ee=.2,SPLAT_FORCE:te=6e3,SHADING:re=!0,COLOR_UPDATE_SPEED:ie=10,BACK_COLOR:he={r:.5,g:0,b:0},TRANSPARENT:xe=!0}){const oe=de.useRef(null);return de.useEffect(()=>{const f=oe.current;if(!f)return;let y=[Je()],l={SIM_RESOLUTION:A,DYE_RESOLUTION:R,DENSITY_DISSIPATION:q,VELOCITY_DISSIPATION:$,PRESSURE:J,PRESSURE_ITERATIONS:Q,CURL:Z,SPLAT_RADIUS:ee,SPLAT_FORCE:te,SHADING:re,COLOR_UPDATE_SPEED:ie};const{gl:t,ext:E}=pe(f);if(!t||!E)return;E.supportLinearFiltering||(l.DYE_RESOLUTION=256,l.SHADING=!1);function pe(e){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",i);if(r||(r=e.getContext("webgl",i)||e.getContext("experimental-webgl",i)),!r)throw new Error("Unable to initialize WebGL.");const o="drawBuffers"in r;let n=!1,a=null;o?(r.getExtension("EXT_color_buffer_float"),n=!!r.getExtension("OES_texture_float_linear")):(a=r.getExtension("OES_texture_half_float"),n=!!r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const c=o?r.HALF_FLOAT:a&&a.HALF_FLOAT_OES||0;let d,h,F;return o?(d=_(r,r.RGBA16F,r.RGBA,c),h=_(r,r.RG16F,r.RG,c),F=_(r,r.R16F,r.RED,c)):(d=_(r,r.RGBA,r.RGBA,c),h=_(r,r.RGBA,r.RGBA,c),F=_(r,r.RGBA,r.RGBA,c)),{gl:r,ext:{formatRGBA:d,formatRG:h,formatR:F,halfFloatTexType:c,supportLinearFiltering:n}}}function _(e,i,r,o){if(!ge(e,i,r,o)){if("drawBuffers"in e){const n=e;switch(i){case n.R16F:return _(n,n.RG16F,n.RG,o);case n.RG16F:return _(n,n.RGBA16F,n.RGBA,o);default:return null}}return null}return{internalFormat:i,format:r}}function ge(e,i,r,o){const n=e.createTexture();if(!n)return!1;e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,4,4,0,r,o,null);const a=e.createFramebuffer();return a?(e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function Te(e){if(!e.length)return 0;let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r),i|=0;return i}function Re(e,i){if(!i)return e;let r="";for(const o of i)r+=`#define ${o}
`;return r+e}function g(e,i,r=null){const o=Re(i,r),n=t.createShader(e);return n?(t.shaderSource(n,o),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)||console.trace(t.getShaderInfoLog(n)),n):null}function ne(e,i){if(!e||!i)return null;const r=t.createProgram();return r?(t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS)||console.trace(t.getProgramInfoLog(r)),r):null}function ae(e){let i={};const r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){const n=t.getActiveUniform(e,o);n&&(i[n.name]=t.getUniformLocation(e,n.name))}return i}class D{constructor(i,r){b(this,"program");b(this,"uniforms");this.program=ne(i,r),this.uniforms=this.program?ae(this.program):{}}bind(){this.program&&t.useProgram(this.program)}}class Ee{constructor(i,r){b(this,"vertexShader");b(this,"fragmentShaderSource");b(this,"programs");b(this,"activeProgram");b(this,"uniforms");this.vertexShader=i,this.fragmentShaderSource=r,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(i){let r=0;for(const n of i)r+=Te(n);let o=this.programs[r];if(o==null){const n=g(t.FRAGMENT_SHADER,this.fragmentShaderSource,i);o=ne(this.vertexShader,n),this.programs[r]=o}o!==this.activeProgram&&(o&&(this.uniforms=ae(o)),this.activeProgram=o)}bind(){this.activeProgram&&t.useProgram(this.activeProgram)}}const S=g(t.VERTEX_SHADER,`
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;

      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `),Se=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `),ye=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),De=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,Fe=g(t.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;

      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
    `),Ae=g(t.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;

      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);

          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }

      void main () {
          #ifdef MANUAL_FILTERING
              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
              vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }
    `,E.supportLinearFiltering?null:["MANUAL_FILTERING"]),_e=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;

          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }

          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `),we=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `),be=g(t.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;

      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;

          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;

          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),Ue=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `),Le=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),p=(()=>{const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const i=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,i),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(r,o=!1)=>{t&&(r?(t.viewport(0,0,r.width,r.height),t.bindFramebuffer(t.FRAMEBUFFER,r.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),o&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}})();let x,u,I,O,w;const H=new D(S,Se),C=new D(S,ye),v=new D(S,Fe),s=new D(S,Ae),M=new D(S,_e),G=new D(S,we),T=new D(S,be),U=new D(S,Ue),L=new D(S,Le),P=new Ee(S,De);function X(e,i,r,o,n,a){t.activeTexture(t.TEXTURE0);const c=t.createTexture();t.bindTexture(t.TEXTURE_2D,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,i,0,o,n,null);const d=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,d),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0),t.viewport(0,0,e,i),t.clear(t.COLOR_BUFFER_BIT);const h=1/e,F=1/i;return{texture:c,fbo:d,width:e,height:i,texelSizeX:h,texelSizeY:F,attach(z){return t.activeTexture(t.TEXTURE0+z),t.bindTexture(t.TEXTURE_2D,c),z}}}function W(e,i,r,o,n,a){const c=X(e,i,r,o,n,a),d=X(e,i,r,o,n,a);return{width:e,height:i,texelSizeX:c.texelSizeX,texelSizeY:c.texelSizeY,read:c,write:d,swap(){const h=this.read;this.read=this.write,this.write=h}}}function Be(e,i,r,o,n,a,c){const d=X(i,r,o,n,a,c);return H.bind(),H.uniforms.uTexture&&t.uniform1i(H.uniforms.uTexture,e.attach(0)),p(d,!1),d}function ue(e,i,r,o,n,a,c){return e.width===i&&e.height===r||(e.read=Be(e.read,i,r,o,n,a,c),e.write=X(i,r,o,n,a,c),e.width=i,e.height=r,e.texelSizeX=1/i,e.texelSizeY=1/r),e}function ce(){const e=se(l.SIM_RESOLUTION),i=se(l.DYE_RESOLUTION),r=E.halfFloatTexType,o=E.formatRGBA,n=E.formatRG,a=E.formatR,c=E.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),x?x=ue(x,i.width,i.height,o.internalFormat,o.format,r,c):x=W(i.width,i.height,o.internalFormat,o.format,r,c),u?u=ue(u,e.width,e.height,n.internalFormat,n.format,r,c):u=W(e.width,e.height,n.internalFormat,n.format,r,c),I=X(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST),O=X(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST),w=W(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST)}function Pe(){const e=[];l.SHADING&&e.push("SHADING"),P.setKeywords(e)}function se(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight,o=i/r;let n=o<1?1/o:o;const a=Math.round(e),c=Math.round(e*n);return i>r?{width:c,height:a}:{width:a,height:c}}function m(e){const i=window.devicePixelRatio||1;return Math.floor(e*i)}Pe(),ce();let fe=Date.now(),N=0;function k(){const e=Xe();ze()&&ce(),Ce(e),Me(),Ge(e),Ye(null),requestAnimationFrame(k)}function Xe(){const e=Date.now();let i=(e-fe)/1e3;return i=Math.min(i,.016666),fe=e,i}function ze(){const e=m(f.clientWidth),i=m(f.clientHeight);return f.width!==e||f.height!==i?(f.width=e,f.height=i,!0):!1}function Ce(e){N+=e*l.COLOR_UPDATE_SPEED,N>=1&&(N=Ke(N,0,1),y.forEach(i=>{i.color=V()}))}function Me(){for(const e of y)e.moved&&(e.moved=!1,Ve(e))}function Ge(e){t.disable(t.BLEND),G.bind(),G.uniforms.texelSize&&t.uniform2f(G.uniforms.texelSize,u.texelSizeX,u.texelSizeY),G.uniforms.uVelocity&&t.uniform1i(G.uniforms.uVelocity,u.read.attach(0)),p(O),T.bind(),T.uniforms.texelSize&&t.uniform2f(T.uniforms.texelSize,u.texelSizeX,u.texelSizeY),T.uniforms.uVelocity&&t.uniform1i(T.uniforms.uVelocity,u.read.attach(0)),T.uniforms.uCurl&&t.uniform1i(T.uniforms.uCurl,O.attach(1)),T.uniforms.curl&&t.uniform1f(T.uniforms.curl,l.CURL),T.uniforms.dt&&t.uniform1f(T.uniforms.dt,e),p(u.write),u.swap(),M.bind(),M.uniforms.texelSize&&t.uniform2f(M.uniforms.texelSize,u.texelSizeX,u.texelSizeY),M.uniforms.uVelocity&&t.uniform1i(M.uniforms.uVelocity,u.read.attach(0)),p(I),C.bind(),C.uniforms.uTexture&&t.uniform1i(C.uniforms.uTexture,w.read.attach(0)),C.uniforms.value&&t.uniform1f(C.uniforms.value,l.PRESSURE),p(w.write),w.swap(),U.bind(),U.uniforms.texelSize&&t.uniform2f(U.uniforms.texelSize,u.texelSizeX,u.texelSizeY),U.uniforms.uDivergence&&t.uniform1i(U.uniforms.uDivergence,I.attach(0));for(let r=0;r<l.PRESSURE_ITERATIONS;r++)U.uniforms.uPressure&&t.uniform1i(U.uniforms.uPressure,w.read.attach(1)),p(w.write),w.swap();L.bind(),L.uniforms.texelSize&&t.uniform2f(L.uniforms.texelSize,u.texelSizeX,u.texelSizeY),L.uniforms.uPressure&&t.uniform1i(L.uniforms.uPressure,w.read.attach(0)),L.uniforms.uVelocity&&t.uniform1i(L.uniforms.uVelocity,u.read.attach(1)),p(u.write),u.swap(),s.bind(),s.uniforms.texelSize&&t.uniform2f(s.uniforms.texelSize,u.texelSizeX,u.texelSizeY),!E.supportLinearFiltering&&s.uniforms.dyeTexelSize&&t.uniform2f(s.uniforms.dyeTexelSize,u.texelSizeX,u.texelSizeY);const i=u.read.attach(0);s.uniforms.uVelocity&&t.uniform1i(s.uniforms.uVelocity,i),s.uniforms.uSource&&t.uniform1i(s.uniforms.uSource,i),s.uniforms.dt&&t.uniform1f(s.uniforms.dt,e),s.uniforms.dissipation&&t.uniform1f(s.uniforms.dissipation,l.VELOCITY_DISSIPATION),p(u.write),u.swap(),!E.supportLinearFiltering&&s.uniforms.dyeTexelSize&&t.uniform2f(s.uniforms.dyeTexelSize,x.texelSizeX,x.texelSizeY),s.uniforms.uVelocity&&t.uniform1i(s.uniforms.uVelocity,u.read.attach(0)),s.uniforms.uSource&&t.uniform1i(s.uniforms.uSource,x.read.attach(1)),s.uniforms.dissipation&&t.uniform1f(s.uniforms.dissipation,l.DENSITY_DISSIPATION),p(x.write),x.swap()}function Ye(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),Ne(e)}function Ne(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight;P.bind(),l.SHADING&&P.uniforms.texelSize&&t.uniform2f(P.uniforms.texelSize,1/i,1/r),P.uniforms.uTexture&&t.uniform1i(P.uniforms.uTexture,x.read.attach(0)),p(e,!1)}function Ve(e){const i=e.deltaX*l.SPLAT_FORCE,r=e.deltaY*l.SPLAT_FORCE;le(e.texcoordX,e.texcoordY,i,r,e.color)}function Ie(e){const i=V();i.r*=10,i.g*=10,i.b*=10;const r=10*(Math.random()-.5),o=30*(Math.random()-.5);le(e.texcoordX,e.texcoordY,r,o,i)}function le(e,i,r,o,n){v.bind(),v.uniforms.uTarget&&t.uniform1i(v.uniforms.uTarget,u.read.attach(0)),v.uniforms.aspectRatio&&t.uniform1f(v.uniforms.aspectRatio,f.width/f.height),v.uniforms.point&&t.uniform2f(v.uniforms.point,e,i),v.uniforms.color&&t.uniform3f(v.uniforms.color,r,o,0),v.uniforms.radius&&t.uniform1f(v.uniforms.radius,Oe(l.SPLAT_RADIUS/100)),p(u.write),u.swap(),v.uniforms.uTarget&&t.uniform1i(v.uniforms.uTarget,x.read.attach(0)),v.uniforms.color&&t.uniform3f(v.uniforms.color,n.r,n.g,n.b),p(x.write),x.swap()}function Oe(e){const i=f.width/f.height;return i>1&&(e*=i),e}function j(e,i,r,o){e.id=i,e.down=!0,e.moved=!1,e.texcoordX=r/f.width,e.texcoordY=1-o/f.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=V()}function K(e,i,r,o){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=i/f.width,e.texcoordY=1-r/f.height,e.deltaX=We(e.texcoordX-e.prevTexcoordX),e.deltaY=ke(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=o}function He(e){e.down=!1}function We(e){const i=f.width/f.height;return i<1&&(e*=i),e}function ke(e){const i=f.width/f.height;return i>1&&(e/=i),e}function V(){const e=je(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function je(e,i,r){let o=0,n=0,a=0;const c=Math.floor(e*6),d=e*6-c,h=r*(1-i),F=r*(1-d*i),z=r*(1-(1-d)*i);switch(c%6){case 0:o=r,n=z,a=h;break;case 1:o=F,n=r,a=h;break;case 2:o=h,n=r,a=z;break;case 3:o=h,n=F,a=r;break;case 4:o=z,n=h,a=r;break;case 5:o=r,n=h,a=F;break}return{r:o,g:n,b:a}}function Ke(e,i,r){const o=r-i;return(e-i)%o+i}window.addEventListener("mousedown",e=>{const i=y[0],r=m(e.clientX),o=m(e.clientY);j(i,-1,r,o),Ie(i)});function ve(e){const i=y[0],r=m(e.clientX),o=m(e.clientY),n=V();k(),K(i,r,o,n),document.body.removeEventListener("mousemove",ve)}document.body.addEventListener("mousemove",ve),window.addEventListener("mousemove",e=>{const i=y[0],r=m(e.clientX),o=m(e.clientY),n=i.color;K(i,r,o,n)});function me(e){const i=e.targetTouches,r=y[0];for(let o=0;o<i.length;o++){const n=m(i[o].clientX),a=m(i[o].clientY);k(),j(r,i[o].identifier,n,a)}document.body.removeEventListener("touchstart",me)}document.body.addEventListener("touchstart",me),window.addEventListener("touchstart",e=>{const i=e.targetTouches,r=y[0];for(let o=0;o<i.length;o++){const n=m(i[o].clientX),a=m(i[o].clientY);j(r,i[o].identifier,n,a)}},!1),window.addEventListener("touchmove",e=>{const i=e.targetTouches,r=y[0];for(let o=0;o<i.length;o++){const n=m(i[o].clientX),a=m(i[o].clientY);K(r,n,a,r.color)}},!1),window.addEventListener("touchend",e=>{const i=e.changedTouches,r=y[0];for(let o=0;o<i.length;o++)He(r)})},[A,R,B,q,$,J,Q,Z,ee,te,re,ie,he,xe]),Y.jsx("div",{className:"pointer-events-none fixed top-0 left-0 z-50 h-full w-full",children:Y.jsx("canvas",{ref:oe,id:"fluid",className:"block h-screen w-screen"})})}function tt(){return Y.jsxs("div",{children:[Y.jsx(Qe,{}),Y.jsx("h1",{children:"Welcome to My App"})]})}export{tt as default};
