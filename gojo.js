// 1. The Gameboard Module
const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const setCell = (index, marker) => {
        if (board[index] === "") {
            board[index] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    const restoreBoard = (savedBoard) => {
        board = savedBoard;
    };

    return { getBoard, setCell, resetBoard, restoreBoard };
})();

// 2. The Player Factory Function
const Player = (name, marker) => {
    return { name, marker };
};

// 3. Localization Dictionary (i18n)
const Localizations = {
    en: {
        domainOpen: (name, marker, p1, p1Score, p2, p2Score) => `Domain Expansion opened! Infinity holds, for I am the best number one sorcerer! ${name}'s turn (${marker})`,
        turnNotice: (name, marker) => `Infinity holds, for I am the best number one sorcerer! ${name}'s turn (${marker})`,
        winRound: (name, p1, p1Score, p2, p2Score) => `Lost In Paradise. My eyes saw this win from the start, baby. Click 'Open Domain' for next round.`,
        winSeries: (name, marker, p1Score, p2Score) => `🏆 TOTAL DOMAIN VICTORY! ${name} (${marker}) conquers the series (${p1Score} - ${p2Score})! Lost In Paradise.`,
        tie: "....I got trapped by Sukuna. Stalemate, until I get reincarnated...So boring! Click 'Open Domain' for next round.",
        timeout: (name) => `Cursed energy overflow! Time ran out. Turn passed from ${name}.`,
        reset: "Series reset. Select your fighter and press 'Open Domain'.",
        saved: "Domain series saved successfully in archives!",
        loaded: (name, marker) => `Loaded archive! Infinity holds, for I am the best number one sorcerer! ${name}'s turn (${marker})`,
        loadedSeries: (p1, p1Score, p2, p2Score) => `Loaded archive! Click 'Open Domain' to continue.`
    },
    ja: {
        domainOpen: (name, marker, p1, p1Score, p2, p2Score) => `領域展開！無量空処だ、なにせ俺は最強なのだからな！ ${name}のターン (${marker})`,
        turnNotice: (name, marker) => `無量空処だ、なにせ俺は最強なのだからな！ ${name}のターン (${marker})`,
        winRound: (name, p1, p1Score, p2, p2Score) => `楽園さ。最初からこの勝利は見えていたよ、ベイビー。次のラウンドは「領域展開」を押してくれ。`,
        winSeries: (name, marker, p1Score, p2Score) => `🏆 完全なる領域勝利！ ${name} (${marker}) がシリーズを制覇 (${p1Score} - ${p2Score})！ 楽園さ。`,
        tie: "……宿儺に嵌められたか。引き分けだ、転生するまでな……退屈極まりない！ 次のラウンドは「領域展開」を押してくれ。",
        timeout: (name) => `呪力暴走！ 時間切れだ。${name}のターンがスキップされた。`,
        reset: "シリーズリセット。ファイターを選んで「領域展開」を押せ。",
        saved: "領域の記録が正常に保存された！",
        loaded: (name, marker) => `アーカイブ読込完了！無量空処、${name}のターン (${marker})`,
        loadedSeries: (p1, p1Score, p2, p2Score) => `アーカイブ読込完了！「領域展開」を押して続けろ。`
    },
    es: {
        domainOpen: (name, marker, p1, p1Score, p2, p2Score) => `¡Expansión de Dominio abierta! ¡El Infinito se mantiene, porque soy el hechicero número uno! Turno de ${name} (${marker})`,
        turnNotice: (name, marker) => `¡El Infinito se mantiene, porque soy el hechicero número uno! Turno de ${name} (${marker})`,
        winRound: (name, p1, p1Score, p2, p2Score) => `Lost In Paradise. Mis ojos vieron esta victoria desde el principio, nena. Haz clic en 'Abrir Dominio' para la siguiente ronda.`,
        winSeries: (name, marker, p1Score, p2Score) => `🏆 ¡VICTORIA TOTAL DE DOMINIO! ¡${name} (${marker}) conquista la serie (${p1Score} - ${p2Score})! Lost In Paradise.`,
        tie: "....Me atrapó Sukuna. ¡Empate, hasta que me reencarne... Qué aburrido! Haz clic en 'Abrir Dominio' para la siguiente ronda.",
        timeout: (name) => `¡Desbordamiento de energía maldita! El tiempo se agotó. Turno pasado de ${name}.`,
        reset: "Serie reiniciada. Selecciona tu luchador y presiona 'Abrir Dominio'.",
        saved: "¡Serie de dominio guardada con éxito en los archivos!",
        loaded: (name, marker) => `¡Archivo cargado! ¡El Infinito se mantiene! Turno de ${name} (${marker})`,
        loadedSeries: (p1, p1Score, p2, p2Score) => `¡Archivo cargado! Haz clic en 'Abrir Dominio' para continuar.`
    },
    de: {
        domainOpen: (name, marker, p1, p1Score, p2, p2Score) => `Domain-Erweiterung geöffnet! Unendlichkeit hält, denn ich bin der allerbeste Sorcerer! ${name}s Zug (${marker})`,
        turnNotice: (name, marker) => `Unendlichkeit hält, denn ich bin der allerbeste Sorcerer! ${name}s Zug (${marker})`,
        winRound: (name, p1, p1Score, p2, p2Score) => `Lost In Paradise. Meine Augen haben diesen Sieg von Anfang an gesehen, Baby. Klicke auf 'Domain öffnen' für die nächste Runde.`,
        winSeries: (name, marker, p1Score, p2Score) => `🏆 GESAMTER DOMAIN-SIEG! ${name} (${marker}) erobert die Serie (${p1Score} - ${p2Score})! Lost In Paradise.`,
        tie: "....Ich wurde von Sukuna gefangen. Unentschieden, bis ich reinkarniere... So langweilig! Klicke auf 'Domain öffnen' für die nächste Runde.",
        timeout: (name) => `Fluchenergie-Überlauf! Zeit abgelaufen. Zug von ${name} übersprungen.`,
        reset: "Serie zurückgesetzt. Wähle deinen Kämpfer und drücke 'Domain öffnen'.",
        saved: "Domain-Serie erfolgreich in Archiven gespeichert!",
        loaded: (name, marker) => `Archiv geladen! Unendlichkeit hält! ${name}s Zug (${marker})`,
        loadedSeries: (p1, p1Score, p2, p2Score) => `Archiv geladen! Klicke auf 'Domain öffnen'.`
    },
    ru: {
        domainOpen: (name, marker, p1, p1Score, p2, p2Score) => `Расширение территории! Бесконечность удерживает позицию, ведь я лучший сильнейший маг! Ход ${name} (${marker})`,
        turnNotice: (name, marker) => `Бесконечность удерживает позицию, ведь я лучший сильнейший маг! Ход ${name} (${marker})`,
        winRound: (name, p1, p1Score, p2, p2Score) => `Lost In Paradise. Мои глаза видели эту победу с самого начала, детка. Нажми 'Открыть территорию' для следующего раунда.`,
        winSeries: (name, marker, p1Score, p2Score) => `🏆 ПОЛНАЯ ПОБЕДА ТЕРРИТОРИИ! ${name} (${marker}) покоряет серию (${p1Score} - ${p2Score})! Lost In Paradise.`,
        tie: "....Меня поймал Сукуна. Ничья, пока я не реинкарнирую... Как скучно! Нажми 'Открыть территорию' для следующего раунда.",
        timeout: (name) => `Переполнение проклятой энергии! Время вышло. Ход передан от ${name}.`,
        reset: "Серия сброшена. Выберите бойца и нажмите 'Открыть территорию'.",
        saved: "Серия успешно сохранена в архивах!",
        loaded: (name, marker) => `Архив загружен! Бесконечность держится! Ход ${name} (${marker})`,
        loadedSeries: (p1, p1Score, p2, p2Score) => `Архив загружен! Нажми 'Открыть территорию'.`
    },
    zh: {
        domainOpen: (name, marker, p1, p1Score, p2, p2Score) => `领域展开！无下限术式常驻，因为我是最强特级咒术师！${name} 的回合 (${marker})`,
        turnNotice: (name, marker) => `无下限术式常驻，因为我是最强特级咒术师！${name} 的回合 (${marker})`,
        winRound: (name, p1, p1Score, p2, p2Score) => `Lost In Paradise. 我的眼睛从一开始就看穿了这场胜利，宝贝。点击“展开领域”进行下一局。`,
        winSeries: (name, marker, p1Score, p2Score) => `🏆 绝对领域胜利！${name} (${marker}) 征服了系列赛 (${p1Score} - ${p2Score})！Lost In Paradise。`,
        tie: "……我被宿傩困住了。平局，直到我转世重生成为……真是无聊透顶！点击“展开领域”进行下一局。",
        timeout: (name) => `咒力过载！时间耗尽。${name} 的回合被跳过。`,
        reset: "系列赛已重置。选择你的角色并点击“展开领域”。",
        saved: "领域档案保存成功！",
        loaded: (name, marker) => `档案加载成功！无下限术式常驻！${name} 的回合 (${marker})`,
        loadedSeries: (p1, p1Score, p2, p2Score) => `档案加载成功！点击“展开领域”继续。`
    },
    ko: {
        domainOpen: (name, marker, p1, p1Score, p2, p2Score) => `영역전개! 무하한은 유지된다, 왜냐하면 내가 가장 강한 주술사니까! ${name}의 턴 (${marker})`,
        turnNotice: (name, marker) => `무하한은 유지된다, 왜냐하면 내가 가장 강한 주술사니까! ${name}의 턴 (${marker})`,
        winRound: (name, p1, p1Score, p2, p2Score) => `Lost In Paradise. 내 눈은 처음부터 이 승리를 보고 있었지, 베이비. 다음 라운드를 위해 '영역 개방'을 누르세요.`,
        winSeries: (name, marker, p1Score, p2Score) => `🏆 완전한 영역 승리! ${name} (${marker})가 시리즈를 정복 (${p1Score} - ${p2Score})! Lost In Paradise.`,
        tie: "....스쿠나에게 갇혀버렸어. 무승부, 환생할 때까지... 너무 지루해! 다음 라운드를 위해 '영역 개방'을 누르세요.",
        timeout: (name) => `주력 과부하! 시간이 초과되었습니다. ${name}의 턴이 넘어갔습니다.`,
        reset: "시리즈 초기화. 파이터를 선택하고 '영역 개방'을 누르세요.",
        saved: "영역 시리즈가 아카이브에 성공적으로 저장되었습니다!",
        loaded: (name, marker) => `아카이브 로드 완료! 무하한 유지! ${name}의 턴 (${marker})`,
        loadedSeries: (p1, p1Score, p2, p2Score) => `아카이브 로드 완료! 계속하려면 '영역 개방'을 누르세요.`
    },
    tr: {
        domainOpen: (name, marker, p1, p1Score, p2, p2Score) => `Domain Expansion açıldı! Sonsuzluk devrede, çünkü en iyi 1 numaralı büyücüyüm! ${name}'in sırası (${marker})`,
        turnNotice: (name, marker) => `Sonsuzluk devrede, çünkü en iyi 1 numaralı büyücüyüm! ${name}'in sırası (${marker})`,
        winRound: (name, p1, p1Score, p2, p2Score) => `Lost In Paradise. Gözlerim bu zaferi başından beri gördü bebeğim. Sonraki tur için 'Domain Aç' tuşuna bas.`,
        winSeries: (name, marker, p1Score, p2Score) => `🏆 TOPLAM DOMAIN ZAFERİ! ${name} (${marker}) seriyi fethetti (${p1Score} - ${p2Score})! Lost In Paradise.`,
        tie: "....Sukuna tarafından kapana kısıldım. Beraberlik, rekarne olana dek... Ne kadar sıkıcı! Sonraki tur için 'Domain Aç' tuşuna bas.",
        timeout: (name) => `Lanetli enerji aşırı yükü! Süre bitti. Sıra ${name} konumundan geçti.`,
        reset: "Seri sıfırlandı. Dövüşçünü seç ve 'Domain Aç' butonuna bas.",
        saved: "Domain serisi arşivlere başarıyla kaydedildi!",
        loaded: (name, marker) => `Arşiv yüklendi! Sonsuzluk devrede! ${name}'in sırası (${marker})`,
        loadedSeries: (p1, p1Score, p2, p2Score) => `Arşiv yüklendi! Devam etmek için 'Domain Aç'a tıkla.`
    },
    id: {
        domainOpen: (name, marker, p1, p1Score, p2, p2Score) => `Domain Expansion dibuka! Infinity bertahan, karena aku adalah penyihir nomor satu terbaik! Giliran ${name} (${marker})`,
        turnNotice: (name, marker) => `Infinity bertahan, karena aku adalah penyihir nomor satu terbaik! Giliran ${name} (${marker})`,
        winRound: (name, p1, p1Score, p2, p2Score) => `Lost In Paradise. Mataku sudah melihat kemenangan ini sejak awal, sayang. Klik 'Open Domain' untuk ronde berikutnya.`,
        winSeries: (name, marker, p1Score, p2Score) => `🏆 KEMENANGAN DOMAIN TOTAL! ${name} (${marker}) menaklukkan seri (${p1Score} - ${p2Score})! Lost In Paradise.`,
        tie: "....Aku terjebak oleh Sukuna. Seri, sampai aku bereinkarnasi... Membosankan! Klik 'Open Domain' untuk ronde berikutnya.",
        timeout: (name) => `Kelebihan energi kutukan! Waktu habis. Giliran dilewati dari ${name}.`,
        reset: "Seri diatur ulang. Pilih petarungmu dan tekan 'Open Domain'.",
        saved: "Seri domain berhasil disimpan di arsip!",
        loaded: (name, marker) => `Arsip dimuat! Infinity bertahan! Giliran ${name} (${marker})`,
        loadedSeries: (p1, p1Score, p2, p2Score) => `Arsip dimuat! Klik 'Open Domain' untuk melanjutkan.`
    },
    fr: {
        domainOpen: (name, marker, p1, p1Score, p2, p2Score) => `Expansion de Domaine ouverte ! L'Infini se maintient, car je suis le meilleur sorcier numéro un ! Tour de ${name} (${marker})`,
        turnNotice: (name, marker) => `L'Infini se maintient, car je suis le meilleur sorcier numéro un ! Tour de ${name} (${marker})`,
        winRound: (name, p1, p1Score, p2, p2Score) => `Lost In Paradise. Mes yeux ont vu cette victoire dès le début, bébé. Cliquez sur 'Ouvrir Domaine' pour la manche suivante.`,
        winSeries: (name, marker, p1Score, p2Score) => `🏆 VICTOIRE TOTALE DE DOMAINE ! ${name} (${marker}) conquiert la série (${p1Score} - ${p2Score}) ! Lost In Paradise.`,
        tie: "....Je me suis fait piéger par Sukuna. Match nul, jusqu'à ce que je me réincarne... C'est ennuyeux ! Cliquez sur 'Ouvrir Domaine' pour la manche suivante.",
        timeout: (name) => `Surcharge d'énergie maudite ! Temps écoulé. Tour passé de ${name}.`,
        reset: "Série réinitialisée. Choisissez votre combattant et appuyez sur 'Ouvrir Domaine'.",
        saved: "Série de domaine sauvegardée avec succès dans les archives !",
        loaded: (name, marker) => `Archive chargée ! L'Infini se maintient ! Tour de ${name} (${marker})`,
        loadedSeries: (p1, p1Score, p2, p2Score) => `Archive chargée ! Cliquez sur 'Ouvrir Domaine'.`
    }
};

// 4. The Display Controller Module
const DisplayController = (() => {
    const boardElement = document.getElementById("board");
    const messageElement = document.getElementById("message");
    const startButton = document.getElementById("start-btn");
    const saveGameButton = document.getElementById("save-game-btn");
    const resetButton = document.getElementById("save-btn");
    const p1Input = document.getElementById("player1");
    const p2Input = document.getElementById("player2");
    const charSelect = document.getElementById("char-select");
    const slotSelect = document.getElementById("slot-select");
    const langSelect = document.getElementById("lang-select");

    const getLang = () => (langSelect ? langSelect.value : "en");

    const render = () => {
        if (!boardElement) return;
        const currentBoard = Gameboard.getBoard();
        const cells = boardElement.querySelectorAll(".cell");

        cells.forEach((cell, index) => {
            cell.textContent = currentBoard[index];
            cell.style.color = currentBoard[index] === "♾️" ? "#c084fc" : "#ef4444";
        });
    };

    const setMessage = (msg) => {
        if (messageElement) messageElement.textContent = msg;
    };

    const updateScoreboard = (p1Name, p1Score, p2Name, p2Score) => {
        const p1Label = document.getElementById("p1-score-label");
        const p2Label = document.getElementById("p2-score-label");
        if (p1Label && p2Label) {
            p1Label.textContent = `${p1Name}: ${p1Score} / 3`;
            p2Label.textContent = `${p2Name}: ${p2Score} / 3`;
        }
    };

    const setTimerText = (text) => {
        const timerEl = document.getElementById("time-left");
        const containerEl = document.getElementById("timer-display");
        if (timerEl && containerEl) {
            containerEl.style.display = "block";
            timerEl.textContent = text;
        }
    };

    const hideTimer = () => {
        const containerEl = document.getElementById("timer-display");
        if (containerEl) containerEl.style.display = "none";
    };

    if (boardElement) {
        boardElement.addEventListener("click", (e) => {
            const cell = e.target;
            if (!cell.classList.contains("cell")) return;

            const index = cell.dataset.index;

            if (GameController.playRound(index)) {
                render();
            }
        });
    }

    if (startButton) {
        startButton.addEventListener("click", () => {
            const p1Name = p1Input && p1Input.value.trim() ? p1Input.value.trim() : "Satoru Gojo";
            const p2Name = p2Input && p2Input.value.trim() ? p2Input.value.trim() : "Ryomen Sukuna";
            const chosenChar = charSelect ? charSelect.value : "gojo";
            const chosenSlot = slotSelect ? slotSelect.value : "p1";
            
            if (GameController.isSeriesOver() || !GameController.hasSeriesStarted()) {
                GameController.startSeries(p1Name, p2Name, chosenChar, chosenSlot);
            } else {
                GameController.startNewRound();
            }
            render();
        });
    }

    if (saveGameButton) {
        saveGameButton.addEventListener("click", () => {
            GameController.saveGame();
        });
    }

    if (resetButton) {
        resetButton.addEventListener("click", () => {
            GameController.resetSeries();
            hideTimer();
            updateScoreboard("Sorcerer", 0, "Cursed King", 0);
            render();
        });
    }

    return { render, setMessage, updateScoreboard, setTimerText, hideTimer, getLang };
})();

// 5. The Game Flow Controller Module (Gojo Edition)
const GameController = (() => {
    let player1Obj;
    let player2Obj;
    let activePlayer;
    let isGameOver = true;
    let seriesOver = false;
    let seriesStarted = false;
    let p1Score = 0;
    let p2Score = 0;
    const targetWins = 3;
    
    let turnTimer = null;
    let timeLeft = 15;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const getStrings = () => {
        const lang = DisplayController.getLang();
        return Localizations[lang] || Localizations.en;
    };

    const startSeries = (name1, name2, chosenChar, chosenSlot) => {
        let m1, m2;
        if (chosenChar === "gojo") {
            m1 = chosenSlot === "p1" ? "♾️" : "👹";
            m2 = chosenSlot === "p1" ? "👹" : "♾️";
        } else {
            m1 = chosenSlot === "p1" ? "👹" : "♾️";
            m2 = chosenSlot === "p1" ? "♾️" : "♾️";
        }

        player1Obj = Player(name1, m1);
        player2Obj = Player(name2, m2);
        p1Score = 0;
        p2Score = 0;
        seriesOver = false;
        seriesStarted = true;
        startNewRound();
    };

    const startNewRound = () => {
        if (seriesOver) return;
        Gameboard.resetBoard();
        activePlayer = player1Obj;
        isGameOver = false;

        const startBtn = document.getElementById("start-btn");
        if (startBtn) startBtn.disabled = false;

        const T = getStrings();
        DisplayController.setMessage(T.domainOpen(activePlayer.name, activePlayer.marker, player1Obj.name, p1Score, player2Obj.name, p2Score));
        DisplayController.updateScoreboard(player1Obj.name, p1Score, player2Obj.name, p2Score);
        startTurnTimer();
    };

    const resetSeries = () => {
        stopTimer();
        Gameboard.resetBoard();
        isGameOver = true;
        seriesOver = true;
        seriesStarted = false;
        p1Score = 0;
        p2Score = 0;
        localStorage.removeItem("jjk_tic_tac_toe_save");
        const T = getStrings();
        DisplayController.setMessage(T.reset);
    };

    const startTurnTimer = () => {
        stopTimer();
        timeLeft = 15;
        DisplayController.setTimerText(timeLeft);

        turnTimer = setInterval(() => {
            timeLeft--;
            DisplayController.setTimerText(timeLeft);

            if (timeLeft <= 0) {
                stopTimer();
                const T = getStrings();
                DisplayController.setMessage(T.timeout(activePlayer.name));
                switchTurn();
                DisplayController.setMessage(T.turnNotice(activePlayer.name, activePlayer.marker));
                startTurnTimer();
            }
        }, 1000);
    };

    const stopTimer = () => {
        if (turnTimer) {
            clearInterval(turnTimer);
            turnTimer = null;
        }
    };

    const switchTurn = () => {
        activePlayer = activePlayer === player1Obj ? player2Obj : player1Obj;
        startTurnTimer();
    };

    const checkWin = (board, marker) => {
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === marker);
        });
    };

    const checkTie = (board) => {
        return board.every(cell => cell !== "");
    };

    const playRound = (index) => {
        if (isGameOver || seriesOver) return false;

        if (Gameboard.setCell(index, activePlayer.marker)) {
            stopTimer();
            const currentBoard = Gameboard.getBoard();
            const T = getStrings();

            if (checkWin(currentBoard, activePlayer.marker)) {
                if (activePlayer === player1Obj) p1Score++;
                else p2Score++;

                isGameOver = true;
                DisplayController.hideTimer();
                DisplayController.updateScoreboard(player1Obj.name, p1Score, player2Obj.name, p2Score);
                
                if (p1Score >= targetWins || p2Score >= targetWins) {
                    seriesOver = true;
                    DisplayController.setMessage(T.winSeries(activePlayer.name, activePlayer.marker, p1Score, p2Score));
                } else {
                    DisplayController.setMessage(T.winRound(activePlayer.name, player1Obj.name, p1Score, player2Obj.name, p2Score));
                }
                return true;
            }

            if (checkTie(currentBoard)) {
                isGameOver = true;
                DisplayController.hideTimer();
                DisplayController.setMessage(T.tie);
                return true;
            }

            switchTurn();
            DisplayController.setMessage(T.turnNotice(activePlayer.name, activePlayer.marker));
            return true;
        }
        return false;
    };

    const isSeriesOver = () => seriesOver;
    const hasSeriesStarted = () => seriesStarted;

    const saveGame = () => {
        stopTimer();
        const T = getStrings();
        const saveData = {
            board: Gameboard.getBoard(),
            p1Name: player1Obj ? player1Obj.name : "Satoru Gojo",
            p2Name: player2Obj ? player2Obj.name : "Ryomen Sukuna",
            p1Marker: player1Obj ? player1Obj.marker : "♾️",
            p2Marker: player2Obj ? player2Obj.marker : "👹",
            p1Score,
            p2Score,
            activeMarker: activePlayer ? activePlayer.marker : "♾️",
            isGameOver,
            seriesOver,
            seriesStarted,
            lang: DisplayController.getLang()
        };
        localStorage.setItem("jjk_tic_tac_toe_save", JSON.stringify(saveData));
        DisplayController.setMessage(T.saved);
        if (!isGameOver && !seriesOver) startTurnTimer();
    };

    const loadGame = () => {
        const savedData = localStorage.getItem("jjk_tic_tac_toe_save");
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                Gameboard.restoreBoard(data.board);
                player1Obj = Player(data.p1Name, data.p1Marker || "♾️");
                player2Obj = Player(data.p2Name, data.p2Marker || "👹");
                p1Score = data.p1Score;
                p2Score = data.p2Score;
                activePlayer = data.activeMarker === player1Obj.marker ? player1Obj : player2Obj;
                isGameOver = data.isGameOver;
                seriesOver = data.seriesOver || false;
                seriesStarted = data.seriesStarted || false;

                const p1Field = document.getElementById("player1");
                const p2Field = document.getElementById("player2");
                const langField = document.getElementById("lang-select");
                if (p1Field) p1Field.value = data.p1Name;
                if (p2Field) p2Field.value = data.p2Name;
                if (langField && data.lang) langField.value = data.lang;

                const T = getStrings();
                DisplayController.render();
                DisplayController.updateScoreboard(player1Obj.name, p1Score, player2Obj.name, p2Score);
                
                if (!isGameOver && !seriesOver) {
                    DisplayController.setMessage(T.loaded(activePlayer.name, activePlayer.marker));
                    startTurnTimer();
                } else {
                    DisplayController.setMessage(T.loadedSeries(player1Obj.name, p1Score, player2Obj.name, p2Score));
                }
            } catch (e) {
                console.error("Load game error:", e);
                localStorage.removeItem("jjk_tic_tac_toe_save");
            }
        }
    };

    window.addEventListener("load", () => {
        loadGame();
    });

    return { startSeries, startNewRound, playRound, saveGame, resetSeries, isSeriesOver, hasSeriesStarted };
})();