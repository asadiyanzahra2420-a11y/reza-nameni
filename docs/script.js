
const services = [
    {
        icon: "🌾",
        title: "نقشه‌برداری اراضی کشاورزی",
        description: "تهیه نقشه دقیق از اراضی کشاورزی با هدف تعیین حدود و مساحت زمین، بررسی موقعیت و مشخص‌کردن مختصات نقاط و گوشه‌های ملک. این خدمات می‌تواند در مدیریت بهتر زمین، امور ملکی و تهیه مستندات موردنیاز مورد استفاده قرار گیرد."
    },
    {
        icon: "🌳",
        title: "نقشه‌برداری منابع طبیعی",
        description: "انجام عملیات نقشه‌برداری و تعیین موقعیت و محدوده اراضی مرتبط با منابع طبیعی، با هدف تهیه اطلاعات مکانی دقیق و مستندسازی وضعیت زمین و مرزهای آن."
    },
    {
        icon: "🗺️",
        title: "نقشه‌های توپوگرافی",
        description: "تهیه نقشه‌های توپوگرافی با نمایش عوارض طبیعی و مصنوعی زمین، پستی‌وبلندی‌ها، خطوط تراز و اختلاف ارتفاع. این نقشه‌ها در مطالعات عمرانی، طراحی پروژه‌ها و بررسی وضعیت زمین کاربرد دارند."
    },
    {
        icon: "📐",
        title: "نقشه‌های کاداستر",
        description: "تهیه نقشه‌های کاداستری با هدف مشخص‌کردن موقعیت، حدود و ابعاد قطعات ملکی و ثبت اطلاعات مکانی آن‌ها. این نقشه‌ها در سامان‌دهی اطلاعات املاک و امور مربوط به تعیین حدود زمین کاربرد دارند."
    },
    {
        icon: "📋",
        title: "نقشه‌های ثبتی",
        description: "تهیه نقشه‌های موردنیاز برای امور ثبتی و ملکی، با هدف تعیین دقیق حدود و موقعیت املاک و آماده‌سازی اطلاعات مکانی موردنیاز برای پیگیری فرایندهای ثبتی."
    },
    {
        icon: "📍",
        title: "نقشه UTM",
        description: "تهیه نقشه UTM و تعیین مختصات گوشه‌های زمین در سیستم مختصات جهانی UTM، با هدف مشخص‌کردن موقعیت دقیق ملک و ارائه اطلاعات مکانی قابل استفاده در امور ملکی و ثبتی."
    }
];

function openService(index) {
    const service = services[index];

    if (!service) return;

    document.getElementById("modalIcon").textContent = service.icon;
    document.getElementById("modalTitle").textContent = service.title;
    document.getElementById("modalDescription").textContent = service.description;

    const modal = document.getElementById("serviceModal");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeService() {
    const modal = document.getElementById("serviceModal");

    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("serviceModal");

    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeService();
            }
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeService();
        }
    });
});
