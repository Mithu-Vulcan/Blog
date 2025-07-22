class headerLogoOnly extends HTMLElement {
	async connectedCallback() {
		const config = await fetch("./jsons/config.json").then((res) => res.json());
		const logo = config["logo"] || "notfetched";

		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
			<style>
				.header {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.logo {
					font-family: var(--font-logo);
					font-weight: 600;
					font-size: 2rem;
					padding: 1rem;
					margin: 0;
				}				
			</style>
			<section class="header">
                <p class="logo">${logo}</p>
            </section>
		`;
	}
}

customElements.define("header-logo-only", headerLogoOnly);
