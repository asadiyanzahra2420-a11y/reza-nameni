<script>
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

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("serviceModal");
    const modalIcon = document.getElementById("modalIcon");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeButton = document.getElementById("modalClose");
    const contactButton = document.getElementById("modalContact");

    if (!modal || !modalIcon || !modalTitle || !modalDescription) {
        console.error("بخش توضیحات خدمات در HTML پیدا نشد.");
    } else {

        const serviceCards = document.querySelectorAll(".service-card");

        serviceCards.forEach(function (card) {
            card.addEventListener("click", function () {

                const index = Number(card.dataset.service);
                const service = services[index];

                if (!service) return;

                modalIcon.textContent = service.icon;
                modalTitle.textContent = service.title;
                modalDescription.textContent = service.description;

                modal.classList.add("active");
                modal.setAttribute("aria-hidden", "false");

                document.body.style.overflow = "hidden";

                if (closeButton) {
                    closeButton.focus();
                }
            });
        });

        function closeModal() {
            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }

        if (closeButton) {
            closeButton.addEventListener("click", closeModal);
        }

        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && modal.classList.contains("active")) {
                closeModal();
            }
        });

        if (contactButton) {
            contactButton.addEventListener("click", closeModal);
        }
    }

    // کنترل پخش و توقف موسیقی
    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicToggle");

    if (music && musicButton) {

        musicButton.addEventListener("click", async function () {

            if (music.paused) {
                try {
                    await music.play();

                    musicButton.classList.add("playing");
                    musicButton.setAttribute("aria-label", "توقف موسیقی");
                    musicButton.title = "توقف موسیقی";

                } catch (error) {
                    console.error("خطا در پخش موسیقی:", error);
                }

            } else {
                music.pause();

                musicButton.classList.remove("playing");
                musicButton.setAttribute("aria-label", "پخش موسیقی");
                musicButton.title = "پخش موسیقی";
            }
        });
    }

});
</script>
