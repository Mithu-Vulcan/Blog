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
		this.innerHTML = `
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
