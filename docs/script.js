
<script>
document.addEventListener("DOMContentLoaded", function () {

    // اطلاعات خدمات
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

    // پنجره توضیحات خدمات
    const modal = document.getElementById("serviceModal");
    const modalIcon = document.getElementById("modalIcon");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeButton = document.getElementById("modalClose");
    const contactButton = document.getElementById("modalContact");

    if (modal && modalIcon && modalTitle && modalDescription) {

        function openService(index) {
            const service = services[index];
            if (!service) return;

            modalIcon.textContent = service.icon;
            modalTitle.textContent = service.title;
            modalDescription.textContent = service.description;

            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";

            if (closeButton) closeButton.focus();
        }

        function closeModal() {
            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }

        document.querySelectorAll(".service-card").forEach(function (card) {
            card.addEventListener("click", function () {
                openService(Number(card.dataset.service));
            });
        });

        if (closeButton) {
            closeButton.addEventListener("click", closeModal);
        }

        modal.addEventListener("click", function (event) {
            if (event.target === modal) closeModal();
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

    // کنترل موسیقی پس‌زمینه
    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicToggle");

    if (music && musicButton) {

        function updateMusicButton() {
            const isPlaying = !music.paused;

            musicButton.classList.toggle("playing", isPlaying);
            musicButton.setAttribute(
                "aria-label",
                isPlaying ? "توقف موسیقی" : "پخش موسیقی"
            );
            musicButton.title = isPlaying ? "توقف موسیقی" : "پخش موسیقی";
        }

        musicButton.addEventListener("click", async function () {

            if (music.paused) {
                try {
                    await music.play();
                } catch (error) {
                    console.error("خطا در پخش موسیقی:", error);
                }
            } else {
                music.pause();
            }

            updateMusicButton();
        });

        music.addEventListener("play", updateMusicButton);
        music.addEventListener("pause", updateMusicButton);
        music.addEventListener("ended", updateMusicButton);

        updateMusicButton();
    }

});
</script>
