const hero = new Proxy({"src":"/_astro/hero.CDQHw4LG.png","width":315,"height":377,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/xid-website/src/assets/hero.png";
							}
							
							return target[name];
						}
					});

export { hero as default };
