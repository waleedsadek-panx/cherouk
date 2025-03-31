const marketingService = new Proxy({"src":"/cherouk/_astro/marketing-service.C59SZwBD.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/marketing-service.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/marketing-service.png");
							return target[name];
						}
					});

export { marketingService as default };
