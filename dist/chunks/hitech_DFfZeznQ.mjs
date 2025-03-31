const hitech = new Proxy({"src":"/cherouk/_astro/hitech.D8q_zAmu.svg","width":308,"height":77,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/hitech.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/hitech.svg");
							return target[name];
						}
					});

export { hitech as default };
