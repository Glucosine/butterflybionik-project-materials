const products = {
  "dual-servo-butterfly": {
    tag: "DISPLAY / READY", title: "双翅舵机仿生蝴蝶", summary: "以双舵机实现双翅联动，强调稳定飞行、近人群展示和视觉识别度，已进入婚庆、演艺与商业展示场景。", status: "已形成稳定量产产品", note: "当前商业入口，优先服务需要视觉记忆点和近人群安全感的展示场景。", images: [["assets/butterfly-pink.jpg", "粉色双翅舵机仿生蝴蝶", "彩绘翼面 / DISPLAY FINISH"], ["assets/butterfly-blue.jpg", "蓝色双翅仿生蝴蝶", "多种翼面图案 / VISUAL VARIANTS"], ["assets/butterfly-frame.jpg", "双翅仿生蝴蝶结构", "轻量骨架 / LIGHTWEIGHT FRAME"]], specs: [["驱动方式", "双舵机驱动"], ["翼展", "约 70 cm"], ["机体总重", "约 46 g"], ["续航时间", "约 25 min"], ["产品阶段", "稳定量产 / 商业展示"]], applications: ["婚庆仪式与送戒指", "音乐会、舞台演艺", "商业活动与文旅展示"]
  },
  "independent-four-wing-butterfly": {
    tag: "CONTROL / ADVANCED", title: "四翅独立仿生蝴蝶", summary: "通过四翅独立驱动复刻昆虫飞行机理，支持前后翅相位调节、左右差动与更复杂的动作编排。", status: "样机迭代 / 高阶控制方向", note: "网页将其表述为科研与高阶样机方向，不把探索性应用写成已经完成的商业交付。", images: [["assets/butterfly-four-wing.jpg", "四翅独立仿生蝴蝶正面结构", "四翅构型 / FOUR-WING FORM"], ["assets/butterfly-four-wing-detail.jpg", "四翅仿生蝴蝶机构细节", "独立驱动 / INDEPENDENT DRIVE"], ["assets/mechanism-parts.jpg", "仿生飞行器机械零件", "可迭代机构 / ITERABLE MECHANISM"]], specs: [["驱动方式", "四电机独立驱动"], ["翼展", "约 35 cm"], ["机体总重", "约 15 g"], ["续航时间", "约 15 min"], ["控制特征", "相位可控 / 静态起飞探索"]], applications: ["扑翼气动与多电机协同教学", "科研机构高自由度样机", "低空监测与生态观察探索"]
  },
  "mechanical-butterfly": {
    tag: "MECHANISM / EDU", title: "机械结构仿生蝴蝶", summary: "以结构清晰、可拆解、可展示为重点，将仿生学、机械传动和空气动力学转化为可理解的产品界面。", status: "结构样机 / 教育产品化", note: "重点不是追求外观仿真，而是把传动关系和扑翼节律变成可以被教学和复现的结构。", images: [["assets/butterfly-mechanical.jpg", "机械结构仿生蝴蝶", "机械传动 / MECHANICAL DRIVE"], ["assets/mechanism-parts.jpg", "仿生飞行器机构零件", "标准化零件 / MODULAR PARTS"], ["assets/butterfly-frame.jpg", "仿生蝴蝶结构骨架", "结构骨架 / STRUCTURAL FRAME"]], specs: [["核心结构", "齿轮 / 连杆 / 翼面"], ["制造方式", "多为 3D 打印件"], ["产品形态", "机械结构样机"], ["拆装属性", "可拆解 / 可演示"], ["产品阶段", "教育产品化方向"]], applications: ["K12 至高校 STEM 教育", "科技馆与研学基地展示", "机械结构与仿生学课程"]
  },
  "flexible-string-butterfly": {
    tag: "FLEXIBLE / KIT", title: "绳驱柔性仿生蝴蝶", summary: "围绕柔性绳驱、低噪声和可装配性展开，承接 BP 中机械绳驱四翅蝴蝶的教育套件路线。", status: "教育套件方向 / 可课程化", note: "这里将 BP 中绳驱方案的可拆解、低噪声和标准化潜力拆出来，作为独立教育产品呈现。", images: [["assets/butterfly-flexible.jpg", "绳驱柔性仿生蝴蝶", "柔性翼面 / FLEXIBLE WING"], ["assets/butterfly-four-wing-detail.jpg", "绳驱仿生蝴蝶结构细节", "绳驱路径 / STRING ROUTE"], ["assets/mechanism-parts.jpg", "机械套件零件", "课程装配 / KIT ASSEMBLY"]], specs: [["驱动方式", "柔性绳驱"], ["传动特征", "柔性传力 / 降低冲击"], ["翼面特征", "轻量柔性翼面"], ["结构属性", "可装配 / 可维护"], ["规格参考", "绳驱方案约 30 cm / 25 g"]], applications: ["科创教育套件", "仿生机械装配课程", "学校、科技馆与研学基地"]
  },
  "mechanical-dragonfly": {
    tag: "PRECISION / PLATFORM", title: "机械结构仿生蜻蜓", summary: "相较蝴蝶更强调翼间耦合、灵活姿态和稳态悬停能力，作为科研验证与精密场景的升级方向。", status: "完整样机 / 高阶平台方向", note: "BP 中的巡检、生态巡护等内容在这里作为应用方向展示，具体任务需要进一步验证载荷和飞行边界。", images: [["assets/dragonfly-mechanical.jpg", "机械结构仿生蜻蜓", "四翼构型 / FOUR-WING PLATFORM"], ["assets/dragonfly-prototype.jpg", "仿生蜻蜓正面原型", "相位配合 / PHASE COORDINATION"], ["assets/mechanism-parts.jpg", "仿生飞行器机械零件", "机构迭代 / MECHANISM ITERATION"]], specs: [["驱动方式", "机械传动 / 绳驱四翼"], ["翼展", "约 35 cm"], ["机体总重", "约 43 g"], ["续航时间", "约 15 min"], ["飞行特征", "相位配合 / 稳态悬停探索"]], applications: ["精密巡检与低空探测", "林业生态巡护", "仿生飞行科创实训"]
  },
  "mechanical-bee": {
    tag: "NEXT / INSECT", title: "机械结构仿生蜜蜂", summary: "仿生蜜蜂作为产品矩阵的延展方向，当前以形态、机构和控制路径验证为主，暂不把未来目标写成已交付产品。", status: "产品延展方向 / 研制中", note: "当前不展示未经验证的重量、续航和载荷数据，待蜜蜂样机完成测试后再补充。", images: [["assets/bee-prototype.jpg", "仿生蜜蜂形态原型", "昆虫形态 / INSECT FORM"], ["assets/mechanism-parts.jpg", "仿生机构零件", "机构储备 / MECHANISM BASE"], ["assets/butterfly-four-wing-detail.jpg", "独立驱动机构参考", "控制参考 / CONTROL REFERENCE"]], specs: [["产品阶段", "研制中 / 方向验证"], ["结构方向", "机械结构探索"], ["技术关注", "高频扑翼 / 轻量化"], ["应用方向", "科创展示 / 科研验证"], ["参数状态", "待样机测试后更新"]], applications: ["仿生学科创展示", "昆虫飞行机理研究", "未来群体飞行平台探索"]
  },
  "motor-driven-bird": {
    tag: "LOW ALTITUDE / BIRD", title: "电机驱动仿生鸟", summary: "采用电机与双舵机协同驱动，利用多级翅与尾翼调节拓展速度、升力和姿态稳定性。", status: "高阶样机 / 低空平台方向", note: "BP 中的巡查和影像回传属于平台化应用方向，网页保留为验证目标，不替代实际合规与任务测试。", images: [["assets/bird-drawing.jpg", "仿生鸟工程结构图", "翼面设计 / WING DESIGN"], ["assets/bird-wing.jpg", "仿生鸟翼面制作过程", "翼面制作 / WING FABRICATION"], ["assets/bird-assembly.jpg", "仿生鸟装配过程", "电控装配 / SYSTEM ASSEMBLY"]], specs: [["驱动方式", "电机 + 双舵机"], ["翼展", "约 100 cm"], ["机体总重", "约 300 g"], ["续航时间", "约 5–8 min"], ["平台方向", "载荷 / 影像回传探索"]], applications: ["低空面域观测", "环境巡查与影像采集", "仿生低空平台验证"]
  }
};

const dialog = document.querySelector("#product-dialog");
const closeDialog = () => dialog?.close();

function renderProduct(product) {
  if (!product || !dialog) return;
  document.querySelector("#dialog-tag").textContent = product.tag;
  document.querySelector("#dialog-title").textContent = product.title;
  document.querySelector("#dialog-summary").textContent = product.summary;
  document.querySelector("#dialog-status").textContent = product.status;
  document.querySelector("#dialog-note").textContent = product.note;
  const main = product.images[0];
  const mainImage = document.querySelector("#dialog-main-image");
  mainImage.src = main[0]; mainImage.alt = main[1];
  document.querySelector("#dialog-main-caption").textContent = main[2];
  document.querySelector("#dialog-side-images").innerHTML = product.images.slice(1).map((image) => `<figure><img src="${image[0]}" alt="${image[1]}" loading="lazy"><figcaption>${image[2]}</figcaption></figure>`).join("");
  document.querySelector("#dialog-specs").innerHTML = product.specs.map((spec) => `<div class="spec-row"><span>${spec[0]}</span><strong>${spec[1]}</strong></div>`).join("");
  document.querySelector("#dialog-applications").innerHTML = product.applications.map((application, index) => `<div><span>0${index + 1}</span><strong>${application}</strong><i>↗</i></div>`).join("");
  dialog.showModal();
}

document.querySelectorAll(".product-trigger").forEach((button) => button.addEventListener("click", () => renderProduct(products[button.dataset.product])));
document.querySelector(".dialog-close")?.addEventListener("click", closeDialog);
dialog?.addEventListener("click", (event) => { if (event.target === dialog) closeDialog(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeDialog(); });
