const cactus = new Proxy({"src":"/cherouk/_astro/cactus.D_jKg2Ry.svg","width":407,"height":110,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/cactus.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/cactus.svg");
							return target[name];
						}
					});

export { cactus as default };
