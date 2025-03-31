const googleWhite = new Proxy({"src":"/cherouk/_astro/google-white.Jo_8AMLF.png","width":2400,"height":2449,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/google-white.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/google-white.png");
							return target[name];
						}
					});

export { googleWhite as default };
