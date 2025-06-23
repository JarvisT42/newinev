var $e=Object.defineProperty;var Je=(l,s,v)=>s in l?$e(l,s,{enumerable:!0,configurable:!0,writable:!0,value:v}):l[s]=v;var L=(l,s,v)=>Je(l,typeof s!="symbol"?s+"":s,v);import{r as O,j as d}from"./app-CvwIeqFu.js";import{c as H}from"./utils-jAU0Cazi.js";function Qe(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}function Ze({SIM_RESOLUTION:l=128,DYE_RESOLUTION:s=1440,CAPTURE_RESOLUTION:v=512,DENSITY_DISSIPATION:Y=3.5,VELOCITY_DISSIPATION:Q=2,PRESSURE:Z=.1,PRESSURE_ITERATIONS:ee=20,CURL:te=3,SPLAT_RADIUS:re=.2,SPLAT_FORCE:ie=6e3,SHADING:oe=!0,COLOR_UPDATE_SPEED:ne=10,BACK_COLOR:xe={r:.5,g:0,b:0},TRANSPARENT:pe=!0}){const ae=O.useRef(null);return O.useEffect(()=>{const m=ae.current;if(!m)return;let b=[Qe()],h={SIM_RESOLUTION:l,DYE_RESOLUTION:s,DENSITY_DISSIPATION:Y,VELOCITY_DISSIPATION:Q,PRESSURE:Z,PRESSURE_ITERATIONS:ee,CURL:te,SPLAT_RADIUS:re,SPLAT_FORCE:ie,SHADING:oe,COLOR_UPDATE_SPEED:ne};const{gl:t,ext:D}=ge(m);if(!t||!D)return;D.supportLinearFiltering||(h.DYE_RESOLUTION=256,h.SHADING=!1);function ge(e){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",i);if(r||(r=e.getContext("webgl",i)||e.getContext("experimental-webgl",i)),!r)throw new Error("Unable to initialize WebGL.");const o="drawBuffers"in r;let n=!1,a=null;o?(r.getExtension("EXT_color_buffer_float"),n=!!r.getExtension("OES_texture_float_linear")):(a=r.getExtension("OES_texture_half_float"),n=!!r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const c=o?r.HALF_FLOAT:a&&a.HALF_FLOAT_OES||0;let g,T,_;return o?(g=A(r,r.RGBA16F,r.RGBA,c),T=A(r,r.RG16F,r.RG,c),_=A(r,r.R16F,r.RED,c)):(g=A(r,r.RGBA,r.RGBA,c),T=A(r,r.RGBA,r.RGBA,c),_=A(r,r.RGBA,r.RGBA,c)),{gl:r,ext:{formatRGBA:g,formatRG:T,formatR:_,halfFloatTexType:c,supportLinearFiltering:n}}}function A(e,i,r,o){if(!Te(e,i,r,o)){if("drawBuffers"in e){const n=e;switch(i){case n.R16F:return A(n,n.RG16F,n.RG,o);case n.RG16F:return A(n,n.RGBA16F,n.RGBA,o);default:return null}}return null}return{internalFormat:i,format:r}}function Te(e,i,r,o){const n=e.createTexture();if(!n)return!1;e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,4,4,0,r,o,null);const a=e.createFramebuffer();return a?(e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function Re(e){if(!e.length)return 0;let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r),i|=0;return i}function Ee(e,i){if(!i)return e;let r="";for(const o of i)r+=`#define ${o}
`;return r+e}function S(e,i,r=null){const o=Ee(i,r),n=t.createShader(e);return n?(t.shaderSource(n,o),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)||console.trace(t.getShaderInfoLog(n)),n):null}function ue(e,i){if(!e||!i)return null;const r=t.createProgram();return r?(t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS)||console.trace(t.getProgramInfoLog(r)),r):null}function ce(e){let i={};const r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){const n=t.getActiveUniform(e,o);n&&(i[n.name]=t.getUniformLocation(e,n.name))}return i}class w{constructor(i,r){L(this,"program");L(this,"uniforms");this.program=ue(i,r),this.uniforms=this.program?ce(this.program):{}}bind(){this.program&&t.useProgram(this.program)}}class Se{constructor(i,r){L(this,"vertexShader");L(this,"fragmentShaderSource");L(this,"programs");L(this,"activeProgram");L(this,"uniforms");this.vertexShader=i,this.fragmentShaderSource=r,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(i){let r=0;for(const n of i)r+=Re(n);let o=this.programs[r];if(o==null){const n=S(t.FRAGMENT_SHADER,this.fragmentShaderSource,i);o=ue(this.vertexShader,n),this.programs[r]=o}o!==this.activeProgram&&(o&&(this.uniforms=ce(o)),this.activeProgram=o)}bind(){this.activeProgram&&t.useProgram(this.activeProgram)}}const F=S(t.VERTEX_SHADER,`
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
    `),ye=S(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `),De=S(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),Fe=`
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
    `,be=S(t.FRAGMENT_SHADER,`
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
    `),we=S(t.FRAGMENT_SHADER,`
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
    `,D.supportLinearFiltering?null:["MANUAL_FILTERING"]),_e=S(t.FRAGMENT_SHADER,`
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
    `),Ae=S(t.FRAGMENT_SHADER,`
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
    `),Ue=S(t.FRAGMENT_SHADER,`
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
    `),Le=S(t.FRAGMENT_SHADER,`
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
    `),Be=S(t.FRAGMENT_SHADER,`
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
    `),E=(()=>{const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const i=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,i),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(r,o=!1)=>{t&&(r?(t.viewport(0,0,r.width,r.height),t.bindFramebuffer(t.FRAMEBUFFER,r.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),o&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}})();let R,u,j,W,U;const k=new w(F,ye),N=new w(F,De),x=new w(F,be),f=new w(F,we),M=new w(F,_e),G=new w(F,Ae),y=new w(F,Ue),B=new w(F,Le),P=new w(F,Be),X=new Se(F,Fe);function z(e,i,r,o,n,a){t.activeTexture(t.TEXTURE0);const c=t.createTexture();t.bindTexture(t.TEXTURE_2D,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,i,0,o,n,null);const g=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,g),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0),t.viewport(0,0,e,i),t.clear(t.COLOR_BUFFER_BIT);const T=1/e,_=1/i;return{texture:c,fbo:g,width:e,height:i,texelSizeX:T,texelSizeY:_,attach(C){return t.activeTexture(t.TEXTURE0+C),t.bindTexture(t.TEXTURE_2D,c),C}}}function K(e,i,r,o,n,a){const c=z(e,i,r,o,n,a),g=z(e,i,r,o,n,a);return{width:e,height:i,texelSizeX:c.texelSizeX,texelSizeY:c.texelSizeY,read:c,write:g,swap(){const T=this.read;this.read=this.write,this.write=T}}}function Pe(e,i,r,o,n,a,c){const g=z(i,r,o,n,a,c);return k.bind(),k.uniforms.uTexture&&t.uniform1i(k.uniforms.uTexture,e.attach(0)),E(g,!1),g}function se(e,i,r,o,n,a,c){return e.width===i&&e.height===r||(e.read=Pe(e.read,i,r,o,n,a,c),e.write=z(i,r,o,n,a,c),e.width=i,e.height=r,e.texelSizeX=1/i,e.texelSizeY=1/r),e}function fe(){const e=le(h.SIM_RESOLUTION),i=le(h.DYE_RESOLUTION),r=D.halfFloatTexType,o=D.formatRGBA,n=D.formatRG,a=D.formatR,c=D.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),R?R=se(R,i.width,i.height,o.internalFormat,o.format,r,c):R=K(i.width,i.height,o.internalFormat,o.format,r,c),u?u=se(u,e.width,e.height,n.internalFormat,n.format,r,c):u=K(e.width,e.height,n.internalFormat,n.format,r,c),j=z(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST),W=z(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST),U=K(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST)}function Xe(){const e=[];h.SHADING&&e.push("SHADING"),X.setKeywords(e)}function le(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight,o=i/r;let n=o<1?1/o:o;const a=Math.round(e),c=Math.round(e*n);return i>r?{width:c,height:a}:{width:a,height:c}}function p(e){const i=window.devicePixelRatio||1;return Math.floor(e*i)}Xe(),fe();let me=Date.now(),V=0;function q(){const e=ze();Ce()&&fe(),Ne(e),Me(),Ge(e),Ye(null),requestAnimationFrame(q)}function ze(){const e=Date.now();let i=(e-me)/1e3;return i=Math.min(i,.016666),me=e,i}function Ce(){const e=p(m.clientWidth),i=p(m.clientHeight);return m.width!==e||m.height!==i?(m.width=e,m.height=i,!0):!1}function Ne(e){V+=e*h.COLOR_UPDATE_SPEED,V>=1&&(V=qe(V,0,1),b.forEach(i=>{i.color=I()}))}function Me(){for(const e of b)e.moved&&(e.moved=!1,Ie(e))}function Ge(e){t.disable(t.BLEND),G.bind(),G.uniforms.texelSize&&t.uniform2f(G.uniforms.texelSize,u.texelSizeX,u.texelSizeY),G.uniforms.uVelocity&&t.uniform1i(G.uniforms.uVelocity,u.read.attach(0)),E(W),y.bind(),y.uniforms.texelSize&&t.uniform2f(y.uniforms.texelSize,u.texelSizeX,u.texelSizeY),y.uniforms.uVelocity&&t.uniform1i(y.uniforms.uVelocity,u.read.attach(0)),y.uniforms.uCurl&&t.uniform1i(y.uniforms.uCurl,W.attach(1)),y.uniforms.curl&&t.uniform1f(y.uniforms.curl,h.CURL),y.uniforms.dt&&t.uniform1f(y.uniforms.dt,e),E(u.write),u.swap(),M.bind(),M.uniforms.texelSize&&t.uniform2f(M.uniforms.texelSize,u.texelSizeX,u.texelSizeY),M.uniforms.uVelocity&&t.uniform1i(M.uniforms.uVelocity,u.read.attach(0)),E(j),N.bind(),N.uniforms.uTexture&&t.uniform1i(N.uniforms.uTexture,U.read.attach(0)),N.uniforms.value&&t.uniform1f(N.uniforms.value,h.PRESSURE),E(U.write),U.swap(),B.bind(),B.uniforms.texelSize&&t.uniform2f(B.uniforms.texelSize,u.texelSizeX,u.texelSizeY),B.uniforms.uDivergence&&t.uniform1i(B.uniforms.uDivergence,j.attach(0));for(let r=0;r<h.PRESSURE_ITERATIONS;r++)B.uniforms.uPressure&&t.uniform1i(B.uniforms.uPressure,U.read.attach(1)),E(U.write),U.swap();P.bind(),P.uniforms.texelSize&&t.uniform2f(P.uniforms.texelSize,u.texelSizeX,u.texelSizeY),P.uniforms.uPressure&&t.uniform1i(P.uniforms.uPressure,U.read.attach(0)),P.uniforms.uVelocity&&t.uniform1i(P.uniforms.uVelocity,u.read.attach(1)),E(u.write),u.swap(),f.bind(),f.uniforms.texelSize&&t.uniform2f(f.uniforms.texelSize,u.texelSizeX,u.texelSizeY),!D.supportLinearFiltering&&f.uniforms.dyeTexelSize&&t.uniform2f(f.uniforms.dyeTexelSize,u.texelSizeX,u.texelSizeY);const i=u.read.attach(0);f.uniforms.uVelocity&&t.uniform1i(f.uniforms.uVelocity,i),f.uniforms.uSource&&t.uniform1i(f.uniforms.uSource,i),f.uniforms.dt&&t.uniform1f(f.uniforms.dt,e),f.uniforms.dissipation&&t.uniform1f(f.uniforms.dissipation,h.VELOCITY_DISSIPATION),E(u.write),u.swap(),!D.supportLinearFiltering&&f.uniforms.dyeTexelSize&&t.uniform2f(f.uniforms.dyeTexelSize,R.texelSizeX,R.texelSizeY),f.uniforms.uVelocity&&t.uniform1i(f.uniforms.uVelocity,u.read.attach(0)),f.uniforms.uSource&&t.uniform1i(f.uniforms.uSource,R.read.attach(1)),f.uniforms.dissipation&&t.uniform1f(f.uniforms.dissipation,h.DENSITY_DISSIPATION),E(R.write),R.swap()}function Ye(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),Ve(e)}function Ve(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight;X.bind(),h.SHADING&&X.uniforms.texelSize&&t.uniform2f(X.uniforms.texelSize,1/i,1/r),X.uniforms.uTexture&&t.uniform1i(X.uniforms.uTexture,R.read.attach(0)),E(e,!1)}function Ie(e){const i=e.deltaX*h.SPLAT_FORCE,r=e.deltaY*h.SPLAT_FORCE;ve(e.texcoordX,e.texcoordY,i,r,e.color)}function Oe(e){const i=I();i.r*=10,i.g*=10,i.b*=10;const r=10*(Math.random()-.5),o=30*(Math.random()-.5);ve(e.texcoordX,e.texcoordY,r,o,i)}function ve(e,i,r,o,n){x.bind(),x.uniforms.uTarget&&t.uniform1i(x.uniforms.uTarget,u.read.attach(0)),x.uniforms.aspectRatio&&t.uniform1f(x.uniforms.aspectRatio,m.width/m.height),x.uniforms.point&&t.uniform2f(x.uniforms.point,e,i),x.uniforms.color&&t.uniform3f(x.uniforms.color,r,o,0),x.uniforms.radius&&t.uniform1f(x.uniforms.radius,He(h.SPLAT_RADIUS/100)),E(u.write),u.swap(),x.uniforms.uTarget&&t.uniform1i(x.uniforms.uTarget,R.read.attach(0)),x.uniforms.color&&t.uniform3f(x.uniforms.color,n.r,n.g,n.b),E(R.write),R.swap()}function He(e){const i=m.width/m.height;return i>1&&(e*=i),e}function $(e,i,r,o){e.id=i,e.down=!0,e.moved=!1,e.texcoordX=r/m.width,e.texcoordY=1-o/m.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=I()}function J(e,i,r,o){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=i/m.width,e.texcoordY=1-r/m.height,e.deltaX=We(e.texcoordX-e.prevTexcoordX),e.deltaY=ke(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=o}function je(e){e.down=!1}function We(e){const i=m.width/m.height;return i<1&&(e*=i),e}function ke(e){const i=m.width/m.height;return i>1&&(e/=i),e}function I(){const e=Ke(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function Ke(e,i,r){let o=0,n=0,a=0;const c=Math.floor(e*6),g=e*6-c,T=r*(1-i),_=r*(1-g*i),C=r*(1-(1-g)*i);switch(c%6){case 0:o=r,n=C,a=T;break;case 1:o=_,n=r,a=T;break;case 2:o=T,n=r,a=C;break;case 3:o=T,n=_,a=r;break;case 4:o=C,n=T,a=r;break;case 5:o=r,n=T,a=_;break}return{r:o,g:n,b:a}}function qe(e,i,r){const o=r-i;return(e-i)%o+i}window.addEventListener("mousedown",e=>{const i=b[0],r=p(e.clientX),o=p(e.clientY);$(i,-1,r,o),Oe(i)});function de(e){const i=b[0],r=p(e.clientX),o=p(e.clientY),n=I();q(),J(i,r,o,n),document.body.removeEventListener("mousemove",de)}document.body.addEventListener("mousemove",de),window.addEventListener("mousemove",e=>{const i=b[0],r=p(e.clientX),o=p(e.clientY),n=i.color;J(i,r,o,n)});function he(e){const i=e.targetTouches,r=b[0];for(let o=0;o<i.length;o++){const n=p(i[o].clientX),a=p(i[o].clientY);q(),$(r,i[o].identifier,n,a)}document.body.removeEventListener("touchstart",he)}document.body.addEventListener("touchstart",he),window.addEventListener("touchstart",e=>{const i=e.targetTouches,r=b[0];for(let o=0;o<i.length;o++){const n=p(i[o].clientX),a=p(i[o].clientY);$(r,i[o].identifier,n,a)}},!1),window.addEventListener("touchmove",e=>{const i=e.targetTouches,r=b[0];for(let o=0;o<i.length;o++){const n=p(i[o].clientX),a=p(i[o].clientY);J(r,n,a,r.color)}},!1),window.addEventListener("touchend",e=>{const i=e.changedTouches,r=b[0];for(let o=0;o<i.length;o++)je(r)})},[l,s,v,Y,Q,Z,ee,te,re,ie,oe,ne,xe,pe]),d.jsx("div",{className:"pointer-events-none fixed top-0 left-0 z-50 h-full w-full",children:d.jsx("canvas",{ref:ae,id:"fluid",className:"block h-screen w-screen"})})}function et({className:l,...s}){return d.jsx("div",{"data-slot":"card",className:H("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",l),...s})}function tt({className:l,...s}){return d.jsx("div",{"data-slot":"card-header",className:H("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",l),...s})}function rt({className:l,...s}){return d.jsx("div",{"data-slot":"card-title",className:H("leading-none font-semibold",l),...s})}function it({className:l,...s}){return d.jsx("div",{"data-slot":"card-content",className:H("px-6",l),...s})}function ot({date:l,title:s,description:v}){return d.jsxs(et,{className:"w-full max-w-sm",children:[d.jsxs(tt,{children:[d.jsx("div",{className:"text-sm font-semibold text-muted-foreground",children:l}),d.jsx(rt,{children:s})]}),d.jsx(it,{children:d.jsx("p",{className:"text-sm text-muted-foreground",children:v})})]})}function ct(){const[l,s]=O.useState([]);return O.useEffect(()=>{fetch("/api/sample").then(v=>v.json()).then(v=>s(v))},[]),d.jsxs("div",{className:"p-4 space-y-6",children:[d.jsx(Ze,{}),d.jsx("h1",{children:"Welcome to My App"}),l.map((v,Y)=>d.jsx(ot,{date:v.event_date,title:v.title,description:v.description},Y))]})}export{ct as default};
