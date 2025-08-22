//your JS code here. If required.
const output = document.getElementById("output");
const errorDiv = document.getElementById("error");
const loading = document.getElementById("loading");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const download=(url)=>{
	return new Promise((resolve,reject)=>{
const img=new Image();
	img.onload=()=>{
		resolve(img);
	}
	img.onerror =()=>{
		reject(new Error(`Failed to load image ${url}`));
	}
	img.src = url;
});
}

Promise.all([download(images[0].url),
			 download(images[1].url),
			download(images[2].url)]).then((data)=>{
             data.forEach((element)=>{
		  output.appendChild(element);
			 });
			}).catch((err)=>{
	output.innerText=err.message;
			})




