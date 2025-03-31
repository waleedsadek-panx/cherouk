const vision = new Proxy({"src":"/cherouk/_astro/vision.Cm3kP3kk.svg","width":333,"height":78,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/vision.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/vision.svg");
							return target[name];
						}
					});

export { vision as default };
