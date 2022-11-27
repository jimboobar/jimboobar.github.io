export default class GameOverlay {
  public html: HTMLDivElement = document.createElement("div");

  constructor() {
    this.html.classList.add(
      "game-overlay",
      "flex-column",
      "justify-center",
      "align-center",
      "hidden"
    );
  }

  open(content: HTMLDivElement) {
    const { html } = this;

    html.append(content);
    html.classList.remove("hidden");
  }

  close() {
    const { html } = this;

    html.classList.add("hidden");
    while (html.lastChild) html.removeChild(html.lastChild);
  }
}
