    // ===================== DATA =====================
    const videoData = [
        { id: 1, title: "Jana Nayagan (Non-Release)", category: "Action", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/janaNa.jpg", src: "L-H_JANA.N.mp4" },
         
         { id: 1000, title: "Jailer 2 (Non-Release)", category: "Action", poster: "https://leaderr1.neocities.org/LeaderHub1/Jailer2.jpg", src: "L-H_JAILER 2 .mp4" },
            
         { id: 1001, title: "Toxic (Non-Release)", category: "Action", poster: "https://leaderr1.neocities.org/LeaderHub1/Toxic.jpg", src: "L-H_TOXIC.mp4" },
            
                    
        { id: 2, category: "Action", title: "Karuppu (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/Karuppu-cover--3e431ab0-13cb-11f1-8c32-a5338e06444d.jpg", src: "https://download.hotshare.link/download.php?url=https://s34.cdnserver04.xyz/Moviesda.Mobi_-_Karuppu_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        
        { id: 71, category: "Action", title: "Blast (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/17789139545623956.jpg", src: "https://download.hotshare.link/download.php?url=https://s05.cdnserver01.xyz/Moviesda.Mobi_-_Blast_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        
        { id: 72, category: "Drama", title: "Gatta Kusthi 2 (HQ Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/GattaKus2.jpeg", src: "https://download.hotshare.link/download.php?url=https://s11.cdnserver02.xyz/Gatta_Kusthi_2_2026_HQ_PreDVD_(v2)_720p_HD_(950_MB).mp4&stream=1" },
           
           
        { id: 73, category: "Drama", title: "Engal Thangam (HQ Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/enga-thang.jpg", src: "https://download.hotshare.link/download.php?url=https://s03.cdnserver01.xyz/Engal_Thangam_2026_HQ_PreDVD_720p_HD_(950_MB).mp4?stream=1" },
        { id: 74, category: "Drama", title: "Nooru saami (HQ Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/100samii.jpg", src: "https://download.hotshare.link/download.php?url=https://s32.cdnserver04.xyz/Nooru_Sami_2026_HQ_PreDVD_720p_HD_(950_MB).mp4?stream=1" },
        
        { id: 53, category: "Love", title: "Love Insurance Kompany (HD Tamil)", poster: "LIK2.jpg", src: "https://download.hotshare.link/download.php?url=https://s21.cdnserver03.xyz/Moviesda.Mobi_-_Love_Insurance_Kompany_2026_Original_720p_HD_(850_MB).mp4?stream=1" },
        
        { id: 54, category: "Action", title: "Kattalan (HQ Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/kattalan.jpg", src: "https://download.hotshare.link/download.php?url=https://s34.cdnserver04.xyz/Kattalan_2026_HQ_PreDVD_720p_HD_(950_MB).mp4?stream=1" },
        
        { id: 55, category: "Love", title: "Sattendru Maarudhu Vaanilai (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/starru.jpg", src: "https://download.hotshare.link/download.php?url=https://s04.cdnserver01.xyz/Moviesda.Mobi_-_Sattendru_Maarudhu_Vaanilai_2026_Original_720p_HD.mp4?stream=1" },
    
        { id: 56, category: "Drama", title: "Carmeni Selvam (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/carmeni.jpg", src: "https://download.hotshare.link/download.php?url=https://s01.cdnserver01.xyz/Moviesda.Mobi_-_Carmeni_Selvam_2026_Original_720p_HD_(700_MB).mp4?stream=1" }
        
        { id: 57, category: "Action", title: "Dhurandhar The Revenge (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/dhu-rvg-leaderhub.jpg", src: "https://download.hotshare.link/download.php?url=https://s15.cdnserver02.xyz/Moviesda.Mobi_-_Dhurandhar_The_Revenge_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        
        { id: 58, category: "Action", title: "Patriot (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/patrio.jpg", src: "https://download.hotshare.link/download.php?url=https://s05.cdnserver01.xyz/Patriot_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 59, category: "Love", title: "29 (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/29.jpg", src: "https://download.hotshare.link/download.php?url=https://s24.cdnserver03.xyz/Moviesda.Mobi_-_29_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        
        { id: 60, category: "Action", title: "KD The Devil (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/kdthe.png", src: "https://download.hotshare.link/download.php?url=https://s32.cdnserver04.xyz/Moviesda.Mobi_-_KD_The_Devil_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        
        { id: 61, category: "Action", title: "The Rise of Ashoka (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/theRisAka.jpg", src: "https://download.hotshare.link/download.php?url=https://s15.cdnserver02.xyz/Moviesda.Mobi_-_The_Rise_of_Ashoka_2026_Original_720p_HD_(800_MB).mp4?stream=1" },
        { id: 62, category: "Love", title: "Red Label (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/redlab.jpg", src: "https://download.hotshare.link/download.php?url=https://s14.cdnserver02.xyz/Moviesda.Mobi_-_Red_Label_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 63, category: "Mystery", title: "Dridam (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/dridam.jpg", src: "https://download.hotshare.link/download.php?url=https://s03.cdnserver01.xyz/Dridam_2026_Original_720p_HD_(850_MB).mp4?stream=1" },
        { id: 64, category: "Action", title: "Leader (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/learr.jpg", src: "https://download.hotshare.link/download.php?url=https://s31.cdnserver04.xyz/Moviesda.Mobi_-_Leader_2026_Original_720p_HD_(800_MB).mp4?stream=1" },
        { id: 65, category: "Mystery", title: "Arivaan (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/arivaa.jpg", src: "https://download.hotshare.link/download.php?url=https://s22.cdnserver03.xyz/Moviesda.Mobi_-_Arivaan_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 66, category: "Comedy", title: "Kanatha Kanom (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/kanKano.jpg", src: "https://download.hotshare.link/download.php?url=https://s11.cdnserver02.xyz/Moviesda.Mobi_-_Kenatha_Kanom_2026_Original_720p_HD_(850_MB).mp4?stream=1" },
        { id: 67, category: "Mystery", title: "Drishyam 3 (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/dri3.jpg", src: "https://download.hotshare.link/download.php?url=https://s02.cdnserver01.xyz/Drishyam_3_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 68, category: "Mystery", title: "M4M (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/Screenshot_2026_0619_091404.png", src: "https://download.hotshare.link/download.php?url=https://s31.cdnserver04.xyz/Moviesda.Mobi_-_M4M_-_Motive_for_Murder_2026_Original_720p_HD.mp4?stream=1" },
        { id: 69, category: "Comedy", title: "Athiradi (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/atddi.jpg", src: "https://download.hotshare.link/download.php?url=https://s15.cdnserver02.xyz/Athiradi_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 71, category: "Drama", title: "Con City (HQ Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/conciti.jpg", src: "https://download.hotshare.link/download.php?url=https://s15.cdnserver02.xyz/Con_City_2026_HQ_PreDVD_720p_HD_(950_MB).mp4?stream=1" },
        
    { id: 72, category: "Love", title: "Heartin (HQ Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/heartin.jpg", src: "https://download.hotshare.link/download.php?url=https://s13.cdnserver02.xyz/Heartin_2026_HQ_PreDVD_720p_HD_(950_MB).mp4?stream=1" },
        
            { id: 73, category: "Mystery", title: "Moondram Kan (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/moondamkAn.jpg", src: "https://download.hotshare.link/download.php?url=https://s25.cdnserver03.xyz/Moviesda.Mobi_-_Moondram_Kan_2026_Original_720p_HD_(850_MB).mp4?stream=1" },
        
              
           { id: 74, category: "Mystery", title: "Dark (HQ Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/dark.jpg", src: "https://download.hotshare.link/download.php?url=https://s12.cdnserver02.xyz/Dark_2026_HQ_PreDVD_720p_HD_(950_MB).mp4&stream=1" },
        
                
        
        { id: 3, category: "Love", title: "Kadhal Reset Repeat (HD Tamil)", poster: "KRR.jpg", src: "https://download.hotshare.link/download.php?url=https://s02.cdnserver01.xyz/Moviesda.Mobi_-_Kadhal_Reset_Repeat_2026_Original_720p_HD_(800_MB).mp4?stream=1" },
        { id: 4, category: "Mystery", title: "Partners (HD Tamil)", poster: "PRT.jpg", src: "https://download.hotshare.link/download.php?url=https://s35.cdnserver04.xyz/Partners_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 5, category: "Drama", title: "Vadam (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/vada.jpg", src: "https://download.hotshare.link/download.php?url=https://s10.hotshare.link/Moviesda.Mobi_-_Vadam_2026_Original_720p_HD__850_MB_.mp4?stream=1" },
        { id: 6, category: "Drama", title: "Parasakthi (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/para.jpg", src: "https://download.hotshare.link/download.php?url=https://s34.cdnserver04.xyz/Moviesda.Mobi_-_Parasakthi_2026_Uncensored_Version_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 7, category: "Mystery", title: "Oh Butterfly (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/ohbytter.jpg", src: "https://download.hotshare.link/download.php?url=https://s01.cdnserver01.xyz/Moviesda.Mobi_-_Oh_Butterfly_2026_Original_720p_HD_(800_MB).mp4?stream=1" },
        { id: 8, category: "Love", title: "Made in Korea (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/Made-In-Koera-X-review.jpg", src: "https://download.hotshare.link/download.php?url=https://s07.hotshare.link/Moviesda.Mobi_-_Made_in_Korea_2026_Original_720p_HD__850_MB_.mp4?stream=1" },
        { id: 9, category: "Mystery", title: "Lockdown (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/lock.jpg", src: "https://download.hotshare.link/download.php?url=https://s09.hotshare.link/Moviesda.Mobi_-_Lockdown_2026_Original_1080p_HD.mp4?stream=1" },
        { id: 10, category: "Mystery", title: "Kayilan (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/Kaye.jpg", src: "https://download.hotshare.link/download.php?url=https://s03.cdnserver01.xyz/Moviesda.Mobi_-_Kayilan_2025_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 11, category: "Action", title: "Karikaada (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/karika.jpg", src: "https://download.hotshare.link/download.php?url=https://s34.cdnserver04.xyz/Moviesda.Mobi_-_Karikaada_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 12, category: "Drama", title: "Accused (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/accu.jpg", src: "https://download.hotshare.link/download.php?url=https://dl9.biggshare.xyz/Moviesda.Mobi_-_Accused_2026_Original_720p_HD__950_MB_.mp4?stream=1" },
        { id: 13, category: "Action", title: "Fourth Floor (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/4thflor.jpg", src: "https://download.hotshare.link/download.php?url=https://dl5.biggshare.xyz/Moviesda.Mobi_-_Fourth_Floor_2026_Original_720p_HD__950_MB_.mp4?stream=1" },
        { id: 14, category: "Mystery", title: "Second Case of Seetharam (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/2ndcase.jpg", src: "https://download.hotshare.link/download.php?url=https://s24.cdnserver03.xyz/Moviesda.Mobi_-_Second_Case_of_Seetharam_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 15, category: "Drama", title: "Vaa Vaathiyaar (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/mn---2026-01-14T110925.065-1768369173395.webp", src: "https://download.hotshare.link/download.php?url=https://dl6.biggshare.xyz/Moviesda.Mobi_-_Vaa_Vaathiyaar_2026_Original_720p_HD__800_MB_.mp4?stream=1" },
        { id: 16, category: "Mystery", title: "Sambavam Adhyayam Onnu (HD Tamil)", poster: "SAO.jpg", src: "https://download.hotshare.link/download.php?url=https://s34.cdnserver04.xyz/Sambavam_Adhyayam_Onnu_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 17, category: "Drama", title: "Kolai Seval (HD Tamil)", poster: "KS.jpg", src: "https://download.hotshare.link/download.php?url=https://s13.cdnserver02.xyz/Moviesda.Mobi_-_Kolai_Seval_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 18, category: "Comedy", title: "Galatta Family (HD Tamil)", poster: "GF.jpg", src: "https://download.hotshare.link/download.php?url=https://s23.cdnserver03.xyz/Moviesda.Mobi_-_Galatta_Family_2025_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 19, category: "Action", title: "Kara (HD Tamil)", poster: "kara.jpg", src: "https://download.hotshare.link/download.php?url=https://s14.cdnserver02.xyz/Moviesda.Mobi_-_Kara_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 20, category: "Drama", title: "Happy Raj (HD Tamil)", poster: "HR.jpg", src: "https://download.hotshare.link/download.php?url=https://s35.cdnserver04.xyz/Moviesda.Mobi_-_Happy_Raj_2026_Original_720p_HD_(800_MB).mp4?stream=1" },
        { id: 21, category: "Love", title: "Youth (HD Tamil)", poster: "youth.jpg", src: "https://download.hotshare.link/download.php?url=https://s21.cdnserver03.xyz/Moviesda.Mobi_-_Youth_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 22, category: "Action", title: "Mr X (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/Mr.-X_4.jpg", src: "https://download.hotshare.link/download.php?url=https://s01.cdnserver01.xyz/Moviesda.Mobi_-_Mr_X_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 23, category: "Comedy", title: "Thaai Kizhavi (HD Tamil)", poster: "TK.jpg", src: "https://download.hotshare.link/download.php?url=https://s25.cdnserver03.xyz/Moviesda.Mobi_-_Thaai_Kizhavi_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 24, category: "Love", title: "Couple Friendly (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/couplefr3.jpg", src: "https://download.hotshare.link/download.php?url=https://s06.hotshare.link/Moviesda.Mobi_-_Couple_Friendly_2026_Original_720p_HD__700_MB_.mp4?stream=1" },
        { id: 25, category: "Action", title: "Karuppu Pulsar (HD Tamil)", poster: "KP.jpg", src: "https://download.hotshare.link/download.php?url=https://dl3.biggshare.xyz/Moviesda.Mobi_-_Karuppu_Pulsar_2026_Original_720p_HD__850_MB_.mp4?stream=1" },
        { id: 26, category: "Love", title: "Pookie (HD Tamil)", poster: "pookie.jpg", src: "https://download.hotshare.link/download.php?url=https://s05.hotshare.link/Moviesda.Mobi_-_Pookie_2026_Original_720p_HD__800_MB_.mp4?stream=1" },
        { id: 27, category: "Love", title: "With Love (HD Tamil)", poster: "wl.jpg", src: "https://download.hotshare.link/download.php?url=https://dl5.biggshare.xyz/Moviesda.Mobi_-_With_Love_2026_Original_720p_HD__950_MB_.mp4?stream=1" },
        { id: 28, category: "Drama", title: "Lucky The Superstar (HD Tamil)", poster: "LTS.jpg", src: "https://download.hotshare.link/download.php?url=https://s04.hotshare.link/Moviesda.Mobi_-_Lucky_the_Superstar_2026_Original_720p_HD__800_MB_.mp4?stream=1" },
        { id: 29, category: "Drama", title: "Thalaivar Thambi Thalaimaiyil (HD Tamil)", poster: "TTT.jpg", src: "https://download.hotshare.link/download.php?url=https://s21.cdnserver03.xyz/Moviesda.Mobi_-_Thalaivar_Thambi_Thalaimaiyil_2026_Original_720p_HD_(800_MB).mp4?stream=1" },
        { id: 30, category: "Love", title: "Nee Forever (HD Tamil)", poster: "NF.jpg", src: "https://download.hotshare.link/download.php?url=https://s33.cdnserver04.xyz/Moviesda.Mobi_-_Nee_Forever_2026_Original_720p_HD_(850_MB).mp4?stream=1" },
        { id: 31, category: "Love", title: "Her (HD Tamil)", poster: "HER.jpg", src: "https://download.hotshare.link/download.php?url=https://s12.cdnserver02.xyz/Her_2026_Original_720p_HD.mp4?stream=1" },
        { id: 32, category: "Action", title: "KGF Chapter 1 (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/kgf1.jpg", src: "error.mp4" },
        { id: 33, category: "Action", title: "KGF Chapter 2 (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/kgf2.jpg", src: "error.mp4" },
        { id: 34, category: "Mystery", title: "Nadhi (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/et00334573-nzkshrbfxl-landscape.jpg", src: "https://download.hotshare.link/download.php?url=https://s11.cdnserver02.xyz/Moviesda.Mobi_-_Nadhi_2022_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 35, category: "Love", title: "Biker (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/et00469257-wrlrlmxbjd-landscape.jpg", src: "https://download.hotshare.link/download.php?url=https://s35.cdnserver04.xyz/Moviesda.Mobi_-_Biker_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 36, category: "Mystery", title: "Iravin Vizhigal (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/et00469976-gljszvstwa-landscape.jpg", src: "https://download.hotshare.link/download.php?url=https://s21.cdnserver03.xyz/Moviesda.Mobi_-_Iravin_Vizhigal_2025_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 37, category: "Comedy", title: "Toaster (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/hq720%20(3).jpg", src: "https://download.hotshare.link/download.php?url=https://s14.cdnserver02.xyz/Moviesda.Mobi_-_Toaster_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 38, category: "Comedy", title: "Mustafa Mustafa (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/Mustafa-Mustafa-hoiri-50f72dd0-16c9-11f1-bd98-ef4f32435798.jpg", src: "https://download.hotshare.link/download.php?url=https://s21.cdnserver03.xyz/Moviesda.Mobi_-_Mustafa_Mustafa_2026_Original_720p_HD_(800_MB).mp4?stream=1" },
        { id: 39, category: "Drama", title: "Viraaji (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/Viraaji%20Review.jpeg", src: "https://download.hotshare.link/download.php?url=https://s15.cdnserver02.xyz/Moviesda.Mobi_-_Viraaji_2026_Original_720p_HD.mp4?stream=1" },
        { id: 40, category: "Love", title: "Funky (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/Funky_f.jpg", src: "https://download.hotshare.link/download.php?url=https://dl8.biggshare.xyz/Moviesda.Mobi_-_Funky_2026_Original_720p_HD__900_MB_.mp4?stream=1" },
        { id: 41, category: "Mystery", title: "Faces (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/faces.jpg", src: "https://download.hotshare.link/download.php?url=https://s31.cdnserver04.xyz/Faces_2026_Original_720p_HD_(800_MB).mp4?stream=1" },
        { id: 42, category: "Love", title: "Mr and Mrs Bachelor (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/mr&mrs.jpg", src: "https://download.hotshare.link/download.php?url=https://s12.cdnserver02.xyz/Moviesda.Mobi_-_Mr_and_Mrs_Bachelor_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
                { id: 43, category: "Action", title: "Jetlee (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/jetle.jpg", src: "https://download.hotshare.link/download.php?url=https://s14.cdnserver02.xyz/Moviesda.Mobi_-_Jetlee_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 44, category: "Drama", title: "Derby (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/derby.jpg", src: "https://download.hotshare.link/download.php?url=https://s05.cdnserver01.xyz/Moviesda.Mobi_-_Derby_2026_Original_720p_HD_(900_MB).mp4?stream=1" },
        { id: 45, category: "Mystery", title: "System (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/system.jpg", src: "https://download.hotshare.link/download.php?url=https://s25.cdnserver03.xyz/Moviesda.Mobi_-_System_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 46, category: "Mystery", title: "Stan The Dark (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/satan.jpg", src: "https://download.hotshare.link/download.php?url=https://s04.cdnserver01.xyz/Moviesda.Mobi_-_Satan_The_Dark_2026_Original_720p_HD_(800_MB).mp4?stream=1" },
        { id: 47, category: "Action", title: "Vaazha 2 (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/vaazha%202.jpg", src: "https://download.hotshare.link/download.php?url=https://s01.cdnserver01.xyz/Vaazha_II_Biopic_of_a_Billion_Bros_2026_Original_720p_HD_(950_MB).mp4?stream=1" },
        { id: 48, category: "Mystery", title: "Eesha (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/eesha.jpg", src: "https://download.hotshare.link/download.php?url=https://dl6.biggshare.xyz/Moviesda.Mobi_-_Eesha_2025_Original_720p_HD__750_MB_.mp4?stream=1" },
        { id: 49, category: "Love", title: "Maayabimbum (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/maayabim.jpg", src: "https://download.hotshare.link/download.php?url=https://s04.hotshare.link/Moviesda.Mobi_-_Maayabimbum_2026_Original_720p_HD__950_MB_.mp4?stream=1" },
        { id: 50, category: "Love", title: "Patang (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/patang.jpg", src: "https://download.hotshare.link/download.php?url=https://dl3.biggshare.xyz/Moviesda.Mobi_-_Patang_2025_Original_720p_HD__900_MB_.mp4?stream=1" },
        { id: 51, category: "Drama", title: "Kadhal Kadhai Sollaba (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/kadhalkadhai.jpg", src: "https://download.hotshare.link/download.php?url=https://s25.cdnserver03.xyz/Moviesda.Mobi_-_Kadhal_Kadhai_Sollava_2026_Original_720p_HD_(750_MB).mp4?stream=1" },
        { id: 52, category: "Love", title: "Hot Spot 2 Much (HD Tamil)", poster: "https://leaderr1.neocities.org/Leader%20Hub%20Movie%20Poster%20/hotspot2.jpg", src: "https://download.hotshare.link/download.php?url=https://dl5.biggshare.xyz/Moviesda.Mobi_-_Hot_Spot_2_Much_2026_Original_720p_HD__900_MB_.mp4?stream=1" },
        // Tamil Dub
        
        { id: 99, category: "Tamil Dub", title: "Spiderman Brand Newday (Trailer)", poster: "https://leaderr1.neocities.org/LeaderHub1/SM-BND.jpg", src: "SMBND.mp4" },
        
        { id: 100, category: "Tamil Dub", title: "No Tears in Hell (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/4f03c0419b5c738dda7301f6d80629b87dcc62ceb18bc95313551c8fe9cf46ec.jpg", src: "https://download.hotshare.link/download.php?url=https://s10.dubshare.one/isaiDub.io_-_No_Tears_in_Hell_2025_Original_720p_HD.mp4?stream=1" },
        { id: 101, category: "Tamil Dub", title: "Crime 101 (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/Crime-101-poster-1-1.jpg", src: "https://download.hotshare.link/download.php?url=https://s04.dubshare.one/isaiDub.io_-_Crime_101_2026_Original_720p_HD.mp4?stream=1" },
        { id: 102, category: "Tamil Dub", title: "The Crash (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/p32919150_b_h10_aa.jpg", src: "https://download.hotshare.link/download.php?url=https://s09.dubshare.one/isaiDub.io_-_The_Crash_2026_Original_720p_HD.mp4?stream=1" },
        { id: 103, category: "Tamil Dub", title: "Apex (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/Apex-Netflix-Thriller-Review.jpg", src: "https://download.hotshare.link/download.php?url=https://s03.dubshare.one/isaiDub.io_-_Apex_2026_Original_720p_HD.mp4?stream=1" },
        { id: 104, category: "Tamil Dub", title: "Coyotes (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/Coyotes-Movie-2025.webp", src: "https://download.hotshare.link/download.php?url=https://s09.dubshare.one/isaiDub.io_-_Coyotes_2025_Original_720p_HD.mp4?stream=1" },
        { id: 105, category: "Tamil Dub", title: "The Whisper (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/31383f6c104f84cf243131e5e4db87d1fad92c99a3eb0bcbc12ce1eaf54695e1.png", src: "https://download.hotshare.link/download.php?url=https://s01.dubshare.one/isaiDub.io_-_The_Whisper_2025_Original_720p_HD.mp4?stream=1" },
        { id: 106, category: "Tamil Dub", title: "The Anacondas (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/maxresdefault.jpg", src: "https://download.hotshare.link/download.php?url=https://s05.dubshare.one/isaiDub.io_-_The_Anacondas_2025_Original_720p_HD.mp4?stream=1" },
        { id: 107, category: "Tamil Dub", title: "Pretty Lethal (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/Picsart_26-05-26_13-04-14-887.png", src: "https://download.hotshare.link/download.php?url=https://s02.dubshare.one/isaiDub.io_-_Pretty_Lethal_2026_Original_1080p_HD.mp4?stream=1" },
        { id: 108, category: "Tamil Dub", title: "Thrash (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/Thrash-Netflix-thriller.jpg", src: "https://download.hotshare.link/download.php?url=https://s05.dubshare.one/isaiDub.io_-_Thrash_2026_Original_720p_HD.mp4?stream=1" },
        { id: 109, category: "Tamil Dub", title: "Project Hail Mary (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/1-30.jpg", src: "https://download.hotshare.link/download.php?url=https://s08.dubshare.one/isaiDub.io_-_Project_Hail_Mary_2026_Original_720p_HD.mp4?stream=1" },
        { id: 110, category: "Tamil Dub", title: "Swapped (HD Tamil)", poster: "https://leaderr1.neocities.org/LeaderHub1/hq720%20(2).jpg", src: "https://download.hotshare.link/download.php?url=https://s02.dubshare.one/isaiDub.io_-_Swapped_2026_Original_720p_HD.mp4?stream=1" }
    ];

    // ===================== STATE =====================
    let activeVideo = null;
    let currentList = [...videoData];
    const LS = {
        get: (k, def = []) => { try { return JSON.parse(localStorage.getItem(k)) || def; } catch { return def; } },
        set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
        getNum: (k) => { try { const v = localStorage.getItem(k); return v ? parseFloat(v) : null; } catch { return null; } },
        setNum: (k, v) => { try { localStorage.setItem(k, String(v)); } catch {} }
    };

    // ===================== INIT =====================
    window.onload = () => {
        renderList(currentList);
        initInfoPopup();
        window.onpopstate = () => {
            if (document.getElementById('player-view').style.display === 'block') {
                minimizeToHome();
            }
        };
    };

    // ===================== TOAST =====================
    let toastTimer;
    function showToast(msg) {
        const t = document.getElementById('toast');
        t.textContent = msg;
        t.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
    }

    // ===================== RIPPLE =====================
    function addRipple(e, el) {
        const r = document.createElement('span');
        r.className = 'ripple-effect';
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px`;
        el.appendChild(r);
        setTimeout(() => r.remove(), 700);
    }

    // ===================== SIDEBAR =====================
    function toggleSidebar() {
        const sb = document.getElementById('sidebar');
        const ov = document.getElementById('overlay');
        sb.classList.toggle('active');
        ov.classList.toggle('active');
    }

    // ===================== RENDER =====================
    function renderList(list) {
        const container = document.getElementById('videoList');
        container.innerHTML = '';
        if (!list.length) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-film"></i>
                    <h3>No movies found</h3>
                    <p>Try a different search or category</p>
                </div>`;
            return;
        }
        list.forEach((v, i) => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.style.animationDelay = Math.min(i * 50, 300) + 'ms';
            card.innerHTML = `
                <div class="poster-box">
                    <img src="${v.poster}" alt="Poster Image" loading="lazy"
                        draggable="false"
                        oncontextmenu="return false;"
                        onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'56\\' viewBox=\\'0 0 100 56\\'%3E%3Crect fill=\\'%23111\\' width=\\'100\\' height=\\'56\\'/%3E%3C/svg%3E'">
                    <div class="poster-overlay">
                        <div class="play-btn-overlay"><i class="fa-solid fa-play" style="margin-left:3px;"></i></div>
                    </div>
                    <div class="badge">FREE</div>
                    <div class="cat-pill">${v.category}</div>
                </div>
                <div class="vid-details">
                    <div class="vid-icon"><i class="fa-solid fa-film"></i></div>
                    <div class="vid-info">
                        <div class="vid-title">${v.title}</div>
                        <div class="vid-meta">Leader Hub &bull; HD Streaming</div>
                    </div>
                    <i class="fa-solid fa-chevron-right vid-arrow"></i>
                </div>`;

            // Long press on poster → show "Poster Image" toast (hide real filename)
            const img = card.querySelector('img');
            let posterLongTimer = null;
            img.addEventListener('touchstart', (e) => {
                posterLongTimer = setTimeout(() => {
                    showToast('🖼️ Poster Image');
                    e.preventDefault();
                }, 400);
            }, { passive: true });
            img.addEventListener('touchend',   () => clearTimeout(posterLongTimer));
            img.addEventListener('touchmove',  () => clearTimeout(posterLongTimer));
            img.addEventListener('touchcancel',() => clearTimeout(posterLongTimer));

            card.onclick = (e) => { addRipple(e, card); openPlayer(v); };
            container.appendChild(card);
        });
    }

    // ===================== PLAYER =====================
    function openPlayer(v) {
        const isSameVideo = activeVideo && activeVideo.id === v.id;
        activeVideo = v;
        history.pushState({ view: 'player' }, '');

        // If the player was minimized, move the real video element back to its home slot
        const cvpWrap = document.getElementById('cvpWrap');
        const homeSlot = document.getElementById('cvpHomeSlot');
        if (cvpWrap && homeSlot && cvpWrap.parentElement !== homeSlot.parentElement) {
            homeSlot.parentElement.insertBefore(cvpWrap, homeSlot.nextSibling);
        }

        document.getElementById('home-page').style.display = 'none';
        document.getElementById('mini-player').style.display = 'none';
        document.getElementById('player-view').style.display = 'block';
        document.getElementById('player-view').scrollTop = 0;

        const player = document.getElementById('mainVid');

        // Only reload the source if it's actually a different video
        if (!isSameVideo) {
            player.src = v.src;
            player.poster = v.poster;
        }
        document.getElementById('p-title').textContent = v.title;
        document.getElementById('playerNavTitle').textContent = v.title;

        // Media Session API — notification la Leader Hub image + title
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title:  v.title,
                artist: 'Leader Hub',
                album:  'Tamil Movies 2026',
                artwork: [
                    { src: 'https://leaderr1.neocities.org/leaderhub.png', sizes: '96x96',   type: 'image/png' },
                    { src: 'https://leaderr1.neocities.org/leaderhub.png', sizes: '128x128', type: 'image/png' },
                    { src: 'https://leaderr1.neocities.org/leaderhub.png', sizes: '192x192', type: 'image/png' },
                    { src: 'https://leaderr1.neocities.org/leaderhub.png', sizes: '256x256', type: 'image/png' },
                    { src: 'https://leaderr1.neocities.org/leaderhub.png', sizes: '512x512', type: 'image/png' }
                ]
            });
            navigator.mediaSession.setActionHandler('play',  () => { player.play(); });
            navigator.mediaSession.setActionHandler('pause', () => { player.pause(); });
            navigator.mediaSession.setActionHandler('seekbackward', () => { player.currentTime = Math.max(0, player.currentTime - 10); });
            navigator.mediaSession.setActionHandler('seekforward',  () => { player.currentTime = Math.min(player.duration || 0, player.currentTime + 10); });
        }

        if (!isSameVideo) {
            const saved = LS.getNum(`time_${v.id}`);
            if (saved && saved > 5) player.currentTime = saved;
            // Reset player state (mute/speed/panel) only for a fresh video
            CVP.reset();
        }

        // Autoplay — home la click pannina automatic aa play aagum
        player.play().catch(() => { /* autoplay blocked — user can tap play */ });

        let hist = LS.get('history');
        hist = hist.filter(id => id !== v.id);
        hist.push(v.id);
        if (hist.length > 50) hist = hist.slice(-50);
        LS.set('history', hist);

        updateActionButtons();
    }

    function handleBack() {
        history.back();
    }

    function minimizeToHome() {
        const cvpWrap = document.getElementById('cvpWrap');
        const miniSlot = document.getElementById('miniPlayerSlot');

        // Move the REAL video element into the mini player — same src, same time, same audio, same play state
        if (cvpWrap && miniSlot) {
            miniSlot.appendChild(cvpWrap);
        }

        document.getElementById('mini-player').style.display = 'block';
        document.getElementById('player-view').style.display = 'none';
        document.getElementById('home-page').style.display = 'block';
    }

    function restorePlayer() {
        if (activeVideo) openPlayer(activeVideo);
    }

    function closeMini(e) {
        e.stopPropagation();
        const m = document.getElementById('mini-player');
        m.style.opacity = '0';
        m.style.transform = 'translateY(20px) scale(0.9)';
        setTimeout(() => {
            m.style.display = 'none';
            m.style.opacity = '';
            m.style.transform = '';
            const player = document.getElementById('mainVid');
            if (player) {
                player.pause();
                player.removeAttribute('src');
                player.load();
            }
            activeVideo = null;
        }, 300);
    }

    // Auto-save progress (works whether full player or minimized)
    setInterval(() => {
        if (activeVideo) {
            const vidEl = document.getElementById('mainVid');
            const t = vidEl.currentTime;
            if (t > 1) LS.setNum(`time_${activeVideo.id}`, t);
        }
    }, 3000);

    // ===================== ACTIONS =====================
    function handleLike() {
        if (!activeVideo) return;
        let likes = LS.get('likes');
        const isLiked = likes.includes(activeVideo.id);
        if (isLiked) {
            likes = likes.filter(id => id !== activeVideo.id);
            showToast('❤️ You Unlike the movie!');
        } else {
            likes.push(activeVideo.id);
            showToast('❤️ You Like the movie!');
        }
        LS.set('likes', likes);
        updateActionButtons();
    }

    function handleSave() {
        if (!activeVideo) return;
        let saves = LS.get('saves');
        const isSaved = saves.includes(activeVideo.id);
        if (isSaved) {
            saves = saves.filter(id => id !== activeVideo.id);
            showToast('🔖 Removed from saved');
        } else {
            saves.push(activeVideo.id);
            showToast('🔖 Saved successfully!');
        }
        LS.set('saves', saves);
        updateActionButtons();
    }

    function updateActionButtons() {
        if (!activeVideo) return;
        const likes = LS.get('likes');
        const saves = LS.get('saves');
        document.getElementById('likeBtn').classList.toggle('active', likes.includes(activeVideo.id));
        document.getElementById('saveBtn').classList.toggle('active', saves.includes(activeVideo.id));
    }

    function shareWhatsApp() {
        window.open('https://wa.me/?text=All%202026%20Tamil%20Movie%20Here.%20Website%20link%20https://url.lkdevs.com/LeaderHub');
    }
    function shareTelegram() {
        window.open('https://t.me/share/url?url=https://url.lkdevs.com/LeaderHub&text=All%202026%20Tamil%20Movie%20Here');
    }

    function sendMovieRequest() {
        const input = document.getElementById('movieRequestInput');
        const movieName = input.value.trim();
        if (!movieName) {
            showToast('⚠️ Movie name not added!');
            input.focus();
            return;
        }
        const msg = encodeURIComponent('🎬 Movie Request\nMovie name: ' + movieName + '\n\nLeader Hub la add pannunga bro!');
        window.open('https://wa.me/94756536188?text=' + msg, '_blank');
        input.value = '';
        showToast('✅ WhatsApp Opening!');
    }

    function sendHomeMovieRequest() {
        const input = document.getElementById('homeMovieRequestInput');
        const movieName = input.value.trim();
        if (!movieName) {
            showToast('⚠️ Movie name sollunga!');
            input.focus();
            return;
        }
        const msg = encodeURIComponent('🎬 Movie Request\nMovie name: ' + movieName + '\n\nLeader Hub la add pannunga bro!');
        window.open('https://wa.me/94756536188?text=' + msg, '_blank');
        input.value = '';
        showToast('✅ WhatsApp Opening!');
    }

    // ===================== WEBSITE INFO — Online Counter =====================
    function shuffleOnline() {
        const el = document.getElementById('siteOnline');
        if (!el) return;
        const val = Math.floor(Math.random() * 41) + 50; // 50–90
        el.textContent = val;
    }
    shuffleOnline();
    setInterval(shuffleOnline, 3500);

    // ===================== DEVICE INFO CARD =====================
    const sessionStart = Date.now();

    // Network ping (uses navigator.connection or fetch timing)
    function measurePing() {
        const el = document.getElementById('dcNetwork');
        if (!el) return;
        const t0 = performance.now();
        fetch('https://www.google.com/favicon.ico?_=' + Date.now(), { mode: 'no-cors', cache: 'no-store' })
            .then(() => {
                const ms = Math.round(performance.now() - t0);
                el.textContent = ms + ' ms';
            })
            .catch(() => {
                // fallback: use navigator.connection rtt
                const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                el.textContent = conn && conn.rtt != null ? conn.rtt + ' ms' : '-- ms';
            });
    }

    // Mobile Model (from user agent)
    function updateModel() {
        const el = document.getElementById('dcModel');
        if (!el) return;
        const ua = navigator.userAgent;
        // Try to extract device model from UA
        let model = 'Unknown';
        // iPhone
        const iph = ua.match(/iPhone\s*OS\s*([\d_]+)/);
        if (iph) { model = 'iPhone (iOS ' + iph[1].replace(/_/g,'.') + ')'; }
        // Android device model
        const and = ua.match(/\(Linux;.*?;\s*([^)]+?)\s+Build\//);
        if (and) { model = and[1].trim(); }
        // Fallback platform
        if (model === 'Unknown') model = navigator.platform || 'Unknown';
        // Truncate if too long
        if (model.length > 16) model = model.substring(0, 14) + '…';
        el.textContent = model;
    }

    // Battery
    async function updateBattery() {
        const el = document.getElementById('dcBattery');
        if (!el) return;
        try {
            const bat = await navigator.getBattery();
            const pct = Math.round(bat.level * 100);
            const charging = bat.charging ? '⚡' : '';
            el.textContent = charging + pct + '%';
            bat.addEventListener('levelchange', () => {
                el.textContent = (bat.charging ? '⚡' : '') + Math.round(bat.level * 100) + '%';
            });
            bat.addEventListener('chargingchange', () => {
                el.textContent = (bat.charging ? '⚡' : '') + Math.round(bat.level * 100) + '%';
            });
        } catch {
            el.textContent = 'N/A';
        }
    }

    // Screen time (minutes since session start)
    function updateScreenTime() {
        const el = document.getElementById('dcScreenTime');
        if (!el) return;
        const mins = Math.floor((Date.now() - sessionStart) / 60000);
        el.textContent = mins + ' Mins';
    }

    // Init device info
    function initDeviceInfo() {
        measurePing();
        updateModel();
        updateBattery();
        updateScreenTime();
        setInterval(measurePing,      10000);
        setInterval(updateScreenTime, 30000);
    }
    initDeviceInfo();

    // ===================== FILTERS =====================
    function filterCategory(cat, btn) {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentList = cat === 'All' ? [...videoData] : videoData.filter(v => v.category === cat);
        document.getElementById('sectionLabel').textContent = cat === 'All' ? 'All Movies' : cat + ' Movies';
        renderList(currentList);
        document.querySelector('.main-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function handleSearch() {
        const q = document.getElementById('mainSearch').value.toLowerCase().trim();
        if (!q) { renderList(currentList); return; }
        const filtered = currentList.filter(v => v.title.toLowerCase().includes(q) || v.category.toLowerCase().includes(q));
        renderList(filtered);
    }

    // ===================== HISTORY / SAVED =====================
    function showHistory() {
        toggleSidebar();
        const histIds = LS.get('history');
        const histList = histIds.map(id => videoData.find(v => v.id === id)).filter(Boolean).reverse();
        const unique = [...new Map(histList.map(v => [v.id, v])).values()];
        document.getElementById('sectionLabel').textContent = 'Watch History';
        renderList(unique);
        if (!unique.length) showToast('⏳ No watch history yet');
    }

    function showSaved() {
        toggleSidebar();
        const savedIds = LS.get('saves');
        const saved = videoData.filter(v => savedIds.includes(v.id));
        document.getElementById('sectionLabel').textContent = 'Saved Movies';
        renderList(saved);
        if (!saved.length) showToast('🔖 No saved movies yet');
    }

    function showHome() {
        toggleSidebar();
        currentList = [...videoData];
        document.getElementById('sectionLabel').textContent = 'All Movies';
        document.querySelectorAll('.cat-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
        renderList(currentList);
    }

    // ===================== SEE MORE =====================
    function handleSeeMore() {
        const btn = document.getElementById('seeMoreBtn');
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Uploading...';
        btn.disabled = true;
        showToast('⏳ Leader Hub lading more movies...');
    }

    // ===================== CUSTOM VIDEO PLAYER =====================
    const CVP = (() => {
        const vid      = () => document.getElementById('mainVid');
        const wrap     = () => document.getElementById('cvpWrap');
        const controls = () => document.getElementById('cvpControls');
        const loader   = () => document.getElementById('cvpLoader');
        const tapIcon  = () => document.getElementById('cvpTapIcon');
        const tapIconI = () => document.getElementById('cvpTapIconI');
        const speedBadge = () => document.getElementById('cvpSpeedBadge');
        const playIcon = () => document.getElementById('cvpPlayIcon');
        const prog     = () => document.getElementById('cvpProg');
        const buf      = () => document.getElementById('cvpBuf');
        const thumb    = () => document.getElementById('cvpThumb');
        const bar      = () => document.getElementById('cvpBar');
        const curEl    = () => document.getElementById('cvpCurrent');
        const durEl    = () => document.getElementById('cvpDuration');
        const panel    = () => document.getElementById('cvpPanel');
        const settBtn  = () => document.getElementById('cvpSettBtn');
        const fsIcon   = () => document.getElementById('cvpFsIcon');

        let hideTimer = null;
        let panelOpen = false;
        let isMuted   = false;
        let is2x      = false;
        let isBoost   = false;
        let audioCtx  = null;
        let gainNode  = null;
        let mediaNode = null;
        let scrubbing = false;

        function flashSkip(side) {
            const el = document.getElementById(side === 'left' ? 'cvpSkipLeft' : 'cvpSkipRight');
            el.classList.add('show');
            setTimeout(() => el.classList.remove('show'), 700);
        }

        function fmt(s) {
            s = Math.floor(s || 0);
            const m = Math.floor(s / 60), sec = s % 60;
            return m + ':' + (sec < 10 ? '0' : '') + sec;
        }

        function showControls() {
            controls().classList.add('show');
            clearTimeout(hideTimer);
            hideTimer = setTimeout(() => {
                if (!panelOpen && !scrubbing) controls().classList.remove('show');
            }, 2000);
        }

        function flashTapIcon(playing) {
            const el = tapIcon(), i = tapIconI();
            i.className = playing ? 'fa-solid fa-play' : 'fa-solid fa-pause';
            el.classList.add('show');
            setTimeout(() => el.classList.remove('show'), 600);
        }

        function updatePlayBtn() {
            const v = vid();
            playIcon().className = v.paused ? 'fa-solid fa-play' : 'fa-solid fa-pause';
        }

        function updateProgress() {
            const v = vid();
            if (!v.duration) return;
            const pct = (v.currentTime / v.duration) * 100;
            prog().style.width = pct + '%';
            thumb().style.left = pct + '%';
            curEl().textContent = fmt(v.currentTime);
            durEl().textContent = fmt(v.duration);
            // buffer
            if (v.buffered.length) {
                const bpct = (v.buffered.end(v.buffered.length - 1) / v.duration) * 100;
                buf().style.width = bpct + '%';
            }
        }

        function seekFromEvent(e) {
            const v = vid(), b = bar();
            const rect = b.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            v.currentTime = ratio * v.duration;
        }

        function init() {
            const v = vid(), w = wrap(), b = bar();

            // ── Block right-click / long-press context menu ──
            v.addEventListener('contextmenu', (e) => e.preventDefault());
            w.addEventListener('contextmenu', (e) => e.preventDefault());

            // ── Video events ──
            v.addEventListener('loadstart',      () => loader().classList.add('show'));
            v.addEventListener('waiting',        () => loader().classList.add('show'));
            v.addEventListener('canplay',        () => loader().classList.remove('show'));
            v.addEventListener('playing',        () => { loader().classList.remove('show'); updatePlayBtn(); });
            v.addEventListener('pause',          updatePlayBtn);
            v.addEventListener('timeupdate',     updateProgress);
            v.addEventListener('loadedmetadata', () => { durEl().textContent = fmt(v.duration); });

            // ── Tap + double-tap + long-press state ──
            let tapCount   = 0;
            let tapTimer   = null;
            let tapClientX = 0;
            let longTimer  = null;
            let longActive = false;
            let touchMoved = false;
            let lastTouchX = 0;
            let lastTouchY = 0;
            let didLong    = false;  // block tap after long press
            let touchHandled = false; // prevent click from firing after touch

            function isControl(el) {
                return b.contains(el) || panel().contains(el) || settBtn().contains(el) || !!el.closest('.cvp-btn');
            }

            function doSingleTap() {
                // Toggle controls visibility
                const ctrl = controls();
                if (ctrl.classList.contains('show')) {
                    // Hide controls and panel
                    ctrl.classList.remove('show');
                    clearTimeout(hideTimer);
                    panel().classList.remove('open');
                    panelOpen = false;
                } else {
                    // Show controls
                    showControls();
                }
            }

            function doDoubleTap(clientX) {
                // Skip ±10s based on tap side
                const rect = w.getBoundingClientRect();
                const midX = rect.left + rect.width / 2;
                if (clientX < midX) {
                    // Left side → back 10s
                    v.currentTime = Math.max(0, v.currentTime - 10);
                    flashSkip('left');
                } else {
                    // Right side → forward 10s
                    v.currentTime = Math.min(v.duration || Infinity, v.currentTime + 10);
                    flashSkip('right');
                }
                showControls();
            }

            // ── Touch detection for tap + double-tap + long-press ──
            w.addEventListener('touchstart', (e) => {
                const t = e.changedTouches[0];
                lastTouchX = t.clientX;
                lastTouchY = t.clientY;
                touchMoved = false;
                didLong    = false;

                if (isControl(e.target)) return;

                // Start long-press timer (500ms hold)
                longTimer = setTimeout(() => {
                    if (touchMoved) return; // cancel if finger moved
                    longActive = true;
                    didLong    = true;
                    v.playbackRate = 2.0;
                    speedBadge().classList.add('show');
                    // Cancel any pending tap/double-tap
                    clearTimeout(tapTimer);
                    tapCount = 0;
                }, 500);
            }, { passive: true });

            // ── Touch move — cancel long press if moved ──
            w.addEventListener('touchmove', (e) => {
                const t = e.changedTouches[0];
                if (Math.abs(t.clientX - lastTouchX) > 10 || Math.abs(t.clientY - lastTouchY) > 10) {
                    touchMoved = true;
                    clearTimeout(longTimer);
                    longTimer = null;
                }
            }, { passive: true });

            // ── Touch end — handle tap / double-tap ──
            w.addEventListener('touchend', (e) => {
                clearTimeout(longTimer);
                longTimer = null;
                touchHandled = true;
                setTimeout(() => { touchHandled = false; }, 400);

                // If long-press was active, just end it
                if (longActive) {
                    longActive = false;
                    v.playbackRate = is2x ? 2.0 : 1.0;
                    speedBadge().classList.remove('show');
                    return; // Don't count as tap
                }

                // Ignore if finger moved significantly or hit a control
                if (didLong || touchMoved || isControl(e.target)) return;

                // Register tap
                const t = e.changedTouches[0];
                tapClientX = t.clientX;
                tapCount++;

                clearTimeout(tapTimer);
                tapTimer = setTimeout(() => {
                    // After 300ms, decide what type of tap this was
                    const count = tapCount;
                    tapCount = 0;
                    if (count === 1) {
                        doSingleTap();
                    } else if (count >= 2) {
                        doDoubleTap(tapClientX);
                    }
                }, 300); // 300ms window for double-tap detection
            }, { passive: true });

            w.addEventListener('touchcancel', () => {
                clearTimeout(longTimer);
                longTimer = null;
                if (longActive) {
                    longActive = false;
                    v.playbackRate = is2x ? 2.0 : 1.0;
                    speedBadge().classList.remove('show');
                }
            }, { passive: true });

            // ── Mouse click (desktop) ──
            w.addEventListener('click', (e) => {
                if (touchHandled || isControl(e.target)) return;

                tapClientX = e.clientX;
                tapCount++;
                clearTimeout(tapTimer);

                tapTimer = setTimeout(() => {
                    const count = tapCount;
                    tapCount = 0;
                    if (count === 1) {
                        doSingleTap();
                    } else if (count >= 2) {
                        doDoubleTap(tapClientX);
                    }
                }, 300); // 300ms for mouse double-click too
            });

            // ── Timeline scrub (mouse) ──
            b.addEventListener('mousedown', (e) => {
                scrubbing = true; seekFromEvent(e);
                const onMv = (e2) => seekFromEvent(e2);
                const onUp = () => { scrubbing = false; document.removeEventListener('mousemove', onMv); document.removeEventListener('mouseup', onUp); };
                document.addEventListener('mousemove', onMv);
                document.addEventListener('mouseup', onUp);
                e.stopPropagation();
            });

            // ── Timeline scrub (touch) ──
            b.addEventListener('touchstart', (e) => { scrubbing = true; seekFromEvent(e); e.stopPropagation(); }, { passive: true });
            b.addEventListener('touchmove',  (e) => { seekFromEvent(e); e.stopPropagation(); }, { passive: true });
            b.addEventListener('touchend',   () => { scrubbing = false; });

            // ── Fullscreen change ──
            document.addEventListener('fullscreenchange',       onFsChange);
            document.addEventListener('webkitfullscreenchange', onFsChange);
        }

        function onFsChange() {
            const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
            fsIcon().className = isFs ? 'fa-solid fa-compress' : 'fa-solid fa-expand';
            if (!isFs && screen.orientation && screen.orientation.unlock) {
                screen.orientation.unlock();
            }
        }

        // Public API
        return {
            init,
            togglePlay() {
                const v = vid();
                if (v.paused) { v.play(); flashTapIcon(false); }
                else { v.pause(); flashTapIcon(true); }
            },
            togglePanel(e) {
                e.stopPropagation();
                panelOpen = !panelOpen;
                panel().classList.toggle('open', panelOpen);
                settBtn().classList.toggle('cvp-sett-open', panelOpen);
                if (panelOpen) {
                    clearTimeout(hideTimer);
                    controls().classList.add('show');
                } else {
                    hideTimer = setTimeout(() => {
                        if (!scrubbing) controls().classList.remove('show');
                    }, 2000);
                }
            },
            toggleMute() {
                const v = vid();
                isMuted = !isMuted;
                v.muted = isMuted;
                document.getElementById('cvpOptMute').classList.toggle('active', isMuted);
                document.getElementById('cvpMuteLbl').textContent = isMuted ? 'ON' : 'OFF';
                document.getElementById('cvpMuteIcon').className = isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
                showToast(isMuted ? '🔇 Muted' : '🔊 Unmuted');
            },
            toggle2x() {
                const v = vid();
                is2x = !is2x;
                v.playbackRate = is2x ? 2.0 : 1.0;
                document.getElementById('cvpOpt2x').classList.toggle('active', is2x);
                document.getElementById('cvp2xLbl').textContent = is2x ? 'ON' : 'OFF';
                showToast(is2x ? '⚡ Speed 2×' : '▶️ Normal Speed');
            },
            toggleBoost() {
                const v = vid();
                isBoost = !isBoost;
                if (isBoost) {
                    try {
                        if (!audioCtx) {
                            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                            mediaNode = audioCtx.createMediaElementSource(v);
                            gainNode = audioCtx.createGain();
                            mediaNode.connect(gainNode);
                            gainNode.connect(audioCtx.destination);
                        }
                        gainNode.gain.setTargetAtTime(2.5, audioCtx.currentTime, 0.1);
                        if (audioCtx.state === 'suspended') audioCtx.resume();
                    } catch(e) { isBoost = false; showToast('⚠️ Boost not supported'); return; }
                } else {
                    if (gainNode) gainNode.gain.setTargetAtTime(1.0, audioCtx.currentTime, 0.1);
                }
                const opt = document.getElementById('cvpOptBoost');
                opt.classList.toggle('active', isBoost);
                opt.classList.toggle('boost-active', isBoost);
                document.getElementById('cvpBoostLbl').textContent = isBoost ? 'ON' : 'OFF';
                showToast(isBoost ? '🔊 Sound Boosted!' : '🔉 Normal Sound');
            },
            admin() {
                window.open('https://wa.me/qr/NPDSNJVZCTNCO1', '_blank');
            },
            toggleFS() {
                const w = wrap();
                const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
                if (!isFs) {
                    const req = w.requestFullscreen || w.webkitRequestFullscreen;
                    if (req) {
                        req.call(w).then(() => {
                            // Force landscape on mobile
                            if (screen.orientation && screen.orientation.lock) {
                                screen.orientation.lock('landscape').catch(() => {});
                            }
                        }).catch(() => {});
                    }
                } else {
                    const exit = document.exitFullscreen || document.webkitExitFullscreen;
                    if (exit) {
                        exit.call(document).then(() => {
                            // Unlock orientation
                            if (screen.orientation && screen.orientation.unlock) {
                                screen.orientation.unlock();
                            }
                        }).catch(() => {});
                    }
                }
            },
            reset() {
                const v = vid();
                isMuted = false; is2x = false;
                v.muted = false; v.playbackRate = 1.0;
                ['cvpOptMute','cvpOpt2x'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.classList.remove('active');
                });
                document.getElementById('cvpMuteLbl').textContent = 'OFF';
                document.getElementById('cvp2xLbl').textContent = 'OFF';
                document.getElementById('cvpMuteIcon').className = 'fa-solid fa-volume-high';
                panel().classList.remove('open');
                settBtn().classList.remove('cvp-sett-open');
                panelOpen = false;
                controls().classList.remove('show');
                clearTimeout(hideTimer);
            }
        };
    })();

    // Expose CVP functions globally for HTML onclick
    window.cvpTogglePlay  = () => CVP.togglePlay();
    window.cvpTogglePanel = (e) => CVP.togglePanel(e);
    window.cvpToggleMute  = () => CVP.toggleMute();
    window.cvpToggle2x    = () => CVP.toggle2x();
    window.cvpToggleBoost = () => CVP.toggleBoost();
    window.cvpAdmin       = () => CVP.admin();
    window.cvpToggleFS    = () => CVP.toggleFS();

    // ===================== HIDE / SHOW EXTRA SECTION =====================
    let extraVisible = true;
    function togglePlayerExtra() {
        const extra = document.getElementById('playerExtra');
        const icon  = document.getElementById('hideExtraIcon');
        const btn   = document.getElementById('hideExtraBtn');
        extraVisible = !extraVisible;
        if (extraVisible) {
            extra.style.maxHeight = '900px';
            extra.style.opacity   = '1';
            icon.className = 'fa-solid fa-eye-slash';
            btn.querySelector('span').textContent = 'Hide';
        } else {
            extra.style.maxHeight = '0';
            extra.style.opacity   = '0';
            icon.className = 'fa-solid fa-eye';
            btn.querySelector('span').textContent = 'Show';
        }
    }

    // Init when DOM ready
    document.addEventListener('DOMContentLoaded', () => CVP.init());
    if (document.readyState !== 'loading') CVP.init();

    // ===================== DRAGGABLE MINI PLAYER =====================
    (function initDraggableMini() {
        const mini = document.getElementById('mini-player');
        const closeBtn = document.getElementById('miniCloseBtn');
        let dragging = false, startX, startY, initLeft, initBottom, wasDragged = false;

        closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeMini(e); });

        function getPos(e) {
            return e.touches ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };
        }
        function onStart(e) {
            if (e.target === closeBtn) return;
            dragging = true; wasDragged = false;
            mini.classList.add('dragging');
            const rect = mini.getBoundingClientRect(), pos = getPos(e);
            startX = pos.x; startY = pos.y;
            initLeft = rect.left; initBottom = window.innerHeight - rect.bottom;
            e.preventDefault();
        }
        function onMove(e) {
            if (!dragging) return;
            const pos = getPos(e), dx = pos.x - startX, dy = pos.y - startY;
            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) wasDragged = true;
            const rect = mini.getBoundingClientRect();
            const newLeft   = Math.max(0, Math.min(initLeft + dx, window.innerWidth - rect.width));
            const newBottom = Math.max(0, Math.min(initBottom - dy, window.innerHeight - rect.height));
            mini.style.left = newLeft + 'px'; mini.style.right = 'auto';
            mini.style.bottom = newBottom + 'px'; mini.style.top = 'auto';
            e.preventDefault();
        }
        function onEnd() {
            if (!dragging) return;
            dragging = false; mini.classList.remove('dragging');
            if (!wasDragged) restorePlayer();
        }
        mini.addEventListener('touchstart', onStart, { passive: false });
        document.addEventListener('touchmove', onMove, { passive: false });
        document.addEventListener('touchend', onEnd);
        mini.addEventListener('mousedown', onStart);
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onEnd);
    })();

    // ===================== SITE INFO POPUP =====================
    const INFO_POPUP_KEY = 'leaderHubInfoSeenAt';
    const INFO_POPUP_HOURS = 4;
    const INFO_WHATSAPP_LINK = '#'; // <-- Vithukshan: replace with your WhatsApp channel link
    const INFO_TELEGRAM_LINK = '#'; // <-- Vithukshan: replace with your Telegram channel link

    function initInfoPopup() {
        const overlay = document.getElementById('infoPopupOverlay');
        const closeBtn = document.getElementById('infoPopupClose');
        const continueBtn = document.getElementById('infoContinueBtn');
        const waBtn = document.getElementById('infoWhatsAppBtn');
        const tgBtn = document.getElementById('infoTelegramBtn');

        if (!overlay) return;

        // Wire up social links
        waBtn.href = INFO_WHATSAPP_LINK;
        tgBtn.href = INFO_TELEGRAM_LINK;

        // Check last seen timestamp
        const lastSeen = LS.getNum(INFO_POPUP_KEY);
        const now = Date.now();
        const hoursPassed = lastSeen ? (now - lastSeen) / (1000 * 60 * 60) : Infinity;

        if (hoursPassed >= INFO_POPUP_HOURS) {
            overlay.classList.add('show');
            lockBodyScroll();
        }

        function lockBodyScroll() {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = '0';
        }

        function unlockBodyScroll() {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
        }

        function dismissPopup() {
            overlay.classList.remove('show');
            unlockBodyScroll();
            LS.setNum(INFO_POPUP_KEY, Date.now());
        }

        // Continue → save timestamp, hide popup (no link open)
        continueBtn.addEventListener('click', dismissPopup);

        // X → save timestamp + open WhatsApp channel link in new tab, then hide
        closeBtn.addEventListener('click', () => {
            dismissPopup();
            window.open(INFO_WHATSAPP_LINK, '_blank');
        });
    }
