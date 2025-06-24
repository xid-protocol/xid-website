const euro = new Proxy({"src":"/_astro/euro.BjBXwD2A.jpg","width":1920,"height":2507,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/xid-website/src/assets/euro.jpg";
							}
							
							return target[name];
						}
					});

export { euro as default };
