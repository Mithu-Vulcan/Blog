class headerNormal extends HTMLElement {
	async connectedCallback() {
		const config = await fetch("./jsons/config.json").then((res) => res.json());
		const logo = config["logo"] || "notfetched";
		let navItems = "";
		for (const name in config["headerConfig"]["links"]) {
			const link = config["headerConfig"]["links"][name];
			navItems += `
                <a href="${link}"><p class="navItem">${name}</p></a>
            `;
		}

		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `

			<style>
				.header {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.logo {
					font-family: var(--font-logo);
					font-weight: 600;
					font-size: 2rem;
					padding: 1rem;
					margin: 0;
				}

				.navItems {
					display: flex;
				}

				.navItem {
					padding: 1rem;
					font-size: 1rem;
					margin: 0;
				}

				a {
					text-decoration: none;
					color: inherit;
				}				
			</style>
			<section class="header">
                <p class="logo">${logo}</p>
                <div class="navItems">
                    ${navItems}
                </div>
            </section>
		`;
	}
}

customElements.define("header-normal", headerNormal);
