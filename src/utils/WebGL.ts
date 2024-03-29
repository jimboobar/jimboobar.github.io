const WebGLVersion: Record<number, string> = {
  1: "WebGL",
  2: "WebGL 2",
} as const;

const WebGLContext: Record<number, any> = {
  1: window.WebGLRenderingContext,
  2: window.WebGL2RenderingContext,
} as const;

export default class WebGL {
  static isWebGLAvailable() {
    try {
      const canvas = document.createElement("canvas");
      return canvas.getContext("webgl") instanceof WebGLRenderingContext;
    } catch (e) {
      return false;
    }
  }

  static isWebGL2Available() {
    try {
      const canvas = document.createElement("canvas");
      return canvas.getContext("webgl2") instanceof WebGL2RenderingContext;
    } catch (e) {
      return false;
    }
  }

  static getWebGLErrorMessage() {
    return this.getErrorMessage(1);
  }

  static getWebGL2ErrorMessage() {
    return this.getErrorMessage(2);
  }

  static getErrorMessage(version: number) {
    let message =
      'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';

    const element = document.createElement("div");
    element.id = "webglmessage";
    element.style.fontFamily = "monospace";
    element.style.fontSize = "13px";
    element.style.fontWeight = "normal";
    element.style.textAlign = "center";
    element.style.background = "#fff";
    element.style.color = "#000";
    element.style.padding = "1.5em";
    element.style.width = "400px";
    element.style.margin = "5em auto 0";

    if (WebGLContext[version]) {
      message = message.replace("$0", "graphics card");
    } else {
      message = message.replace("$0", "browser");
    }

    element.innerHTML = message.replace("$1", WebGLVersion[version]);

    return element;
  }
}
