const paidmediaService = new Proxy({"src":"/cherouk/_astro/paidmedia-service.DMHLmxRd.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/paidmedia-service.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/yourn/Downloads/shrouk/shrouk/src/assets/pages/homepage/paidmedia-service.png");
							return target[name];
						}
					});

export { paidmediaService as default };
