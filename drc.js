var global = this, phantasm = true, noExtra = true, noShottypes = true, GAME = "#game", DIFFICULTY = "#difficulty", CHALLENGE = "#challenge", MISSES = "#misses", SCORING = "#scoring", RUBRICS = "#rubrics",
    BOMBS = "#bombs", SCORE = "#score", PERFORMANCE = "#performance", DRCPOINTS = "#drcpoints", ERROR = "#error", SHOTTYPE = "#shottype", NOTIFY = "#notify", RUBRICS_BUTTON = "#rubricsButton", NB = "#nb",
    NO_EXTRA = "<option>Easy</option>\n<option>Normal</option>\n<option>Hard</option>\n<option>Lunatic</option>", NOTIFY_TEXT = "<b>Important Notice:</b> ", PHANTASMAGORIA = "#phantasmagoriaTable", IS = "#is",
    DIFF_OPTIONS = "<option>Easy</option>\n<option>Normal</option>\n<option>Hard</option>\n<option>Lunatic</option>\n<option>Extra</option>", SHOTTYPE_MULTIPLIERS = "#shottypeMultipliersTable", LS = "#ls",
    PHANTASM = "<option>Easy</option>\n<option>Normal</option>\n<option>Hard</option>\n<option>Lunatic</option>\n<option>Extra</option><option>Phantasm</option>", MOF_TABLE = "#mofScoringTable",
    MISSES_INPUT = "<label for='misses'>Misses</label><input id='misses' type='number' value=0 min=0 max=100>", ERROR_TEXT = "<b style='color:red'>Error: ", CLEARED = "#cleared",
    SCORE_OPTIONS = "<label for='score'>Score</label><input id='score' type='text'>", SCORING_TABLE = "#scoringTable", SURV_TABLE = "#survivalTable", ROUTE = "#route", BB = "#bb",
    SURV_RUBRICS = {
        "SoEW": {
            "Easy": {
                "base": 30,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 80,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 120,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 250,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 100,
                "exp": 1.1,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuC": 1.05
            }
        },
        "PoDD": {
            "Easy": {
                "base": 50,
                "min": 15,
                "lives": 5,
                "noBombBonus": 10
            },
            "Normal": {
                "base": 90,
                "min": 25,
                "lives": 5,
                "noBombBonus": 20
            },
            "Hard": {
                "base": 130,
                "min": 40,
                "lives": 5,
                "noBombBonus": 30
            },
            "Lunatic": {
                "base": 260,
                "min": 50,
                "lives": 5,
                "noBombBonus": 50
            },
            "multiplier": {
                "Mima": 1.1,
                "Marisa": 1.1,
                "Ellen": 1.2,
                "Kotohime": 1.1,
                "Kana": 1.15,
                "Chiyuri": 1.2
            }
        },
        "LLS": {
            "Easy": {
                "base": 40,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 90,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Hard": {
                "base": 140,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 280,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Extra": {
                "base": 90,
                "exp": 1.07,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuB": 1.05,
                "MarisaB": 1.05
            }
        },
        "MS": {
            "Easy": {
                "base": 60,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 300,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 100,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "Reimu": 1.05,
                "Marisa": 1.05,
                "Yuuka": 1.1
            }
        },
        "EoSD": {
            "Easy": {
                "base": 50,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 320,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuA": 1.1,
                "MarisaA": 1.05
            }
        },
        "PCB": {
            "Easy": {
                "base": 60,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 300,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Phantasm": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuA": 1.05,
                "MarisaB": 1.05,
                "SakuyaA": 1.05,
                "SakuyaB": 1.05
            }
        },
        "IN": {
            "Easy": {
                "base": 45,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 90,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 140,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 290,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "MagicTeam": 1.05,
                "ScarletTeam": 1.05,
                "Reimu": 1.1,
                "Marisa": 1.05,
                "Alice": 1.2,
                "Sakuya": 1.2,
                "Remilia": 1.05,
                "Yuyuko": 1.05
            }
        },
        "PoFV": {
            "Easy": {
                "base": 40,
                "min": 10,
                "lives": 7,
                "noBombBonus": 10
            },
            "Normal": {
                "base": 70,
                "min": 15,
                "lives": 7,
                "noBombBonus": 20
            },
            "Hard": {
                "base": 100,
                "min": 20,
                "lives": 7,
                "noBombBonus": 30
            },
            "Lunatic": {
                "base": 210,
                "min": 30,
                "lives": 7,
                "noBombBonus": 50
            },
            "Extra": {
                "base": 85,
                "min": 15,
                "lives": 8,
                "noBombBonus": 25
            },
            "multiplier": {
                "Reimu": 1.1,
                "Marisa": 1.1,
                "Sakuya": 1.1,
                "Youmu": 1.1,
                "Reisen": 1.15,
                "Cirno": 1.1,
                "Lyrica": 1.15,
                "Mystia": 1.1,
                "Tewi": 1.15,
                "Yuuka": 1.15,
                "Komachi": 1.1,
                "Eiki": 1.1
            }
        },
        "MoF": {
            "Easy": {
                "base": 60,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 300,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 105,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuA": 1.05,
                "ReimuC": 1.15,
                "MarisaA": 1.15,
                "MarisaB": 1.05
            }
        },
        "SA": {
            "Easy": {
                "base": 50,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 110,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 300,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuB": 1.05,
                "ReimuC": 1.1,
                "MarisaA": 1.05,
                "MarisaC": 1.15
            }
        },
        "UFO": {
            "Easy": {
                "base": 50,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 160,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 320,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuB": 1.05,
                "MarisaA": 1.05,
                "MarisaB": 1.15,
                "SanaeA": 1.05
            }
        },
        "GFW": {
            "Easy": {
                "base": 50,
                "exp": 1.09,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 90,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 130,
                "exp": 1.06,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 260,
                "exp": 1.06,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Extra": {
                "base": 130,
                "exp": 1.07,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "B1": 1.15,
                "B2": 1.05,
                "C1": 1.1
            }
        },
        "TD": {
            "Easy": {
                "base": 50,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 90,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 140,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 280,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "Sanae": 1.1
            }
        },
        "DDC": {
            "Easy": {
                "base": 50,
                "exp": 1.07,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 100,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 150,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 300,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 110,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "ReimuB": 1.1,
                "MarisaA": 1.2,
                "MarisaB": 1.05,
                "SakuyaB": 1.2
            }
        },
        "LoLK": {
            "Easy": {
                "base": 60,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 2,
                "bomb": 1,
            },
            "Normal": {
                "base": 120,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "Hard": {
                "base": 160,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 4,
                "bomb": 1,
            },
            "Lunatic": {
                "base": 330,
                "exp": 1.05,
                "miss": 2,
                "firstBomb": 5,
                "bomb": 1,
            },
            "Extra": {
                "base": 130,
                "exp": 1.08,
                "miss": 2,
                "firstBomb": 3,
                "bomb": 1,
            },
            "multiplier": {
                "Marisa": 1.15,
                "Sanae": 1.05,
                "Reisen": 1.05
            }
        }
    },
    SCORE_RUBRICS = {
        "HRtP": {
            "Easy": {
                "base": 300,
                "exp": 4
            },
            "Normal": {
                "base": 325,
                "exp": 4
            },
            "Hard": {
                "base": 375,
                "exp": 3
            },
            "Lunatic": {
                "base": 400,
                "exp": 3
            }
        },
        "SoEW": {
            "Easy": {
                "base": 275,
                "exp": 4
            },
            "Normal": {
                "base": 300,
                "exp": 4
            },
            "Hard": {
                "base": 350,
                "exp": 3
            },
            "Lunatic": {
                "base": 375,
                "exp": 2
            },
            "Extra": {
                "base": 325,
                "exp": 3
            }
        },
        "PoDD": {
            "Easy": {
                "base": 300,
                "exp": 4
            },
            "Normal": {
                "base": 350,
                "exp": 3
            },
            "Hard": {
                "base": 400,
                "exp": 3
            },
            "Lunatic": {
                "base": 450,
                "exp": 2
            }
        },
        "LLS": {
            "Easy": {
                "base": 300,
                "exp": 4
            },
            "Normal": {
                "base": 350,
                "exp": 3
            },
            "Hard": {
                "base": 375,
                "exp": 3
            },
            "Lunatic": {
                "base": 400,
                "exp": 2.5
            },
            "Extra": {
                "base": 350,
                "exp": 5
            }
        },
        "MS": {
            "Easy": {
                "base": 300,
                "exp": 4
            },
            "Normal": {
                "base": 350,
                "exp": 3
            },
            "Hard": {
                "base": 400,
                "exp": 3
            },
            "Lunatic": {
                "base": 425,
                "exp": 2
            },
            "Extra": {
                "base": 375,
                "exp": 3
            }
        },
        "EoSD": {
            "Easy": {
                "base": 350,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "PCB": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            },
            "Phantasm": {
                "base": 450,
                "exp": 2.5
            }
        },
        "IN": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "PoFV": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "SA": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "UFO": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "GFW": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 7
            }
        },
        "TD": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "DDC": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        },
        "LoLK": {
            "Easy": {
                "base": 375,
                "exp": 4
            },
            "Normal": {
                "base": 400,
                "exp": 3
            },
            "Hard": {
                "base": 450,
                "exp": 2.5
            },
            "Lunatic": {
                "base": 500,
                "exp": 2
            },
            "Extra": {
                "base": 450,
                "exp": 2.5
            }
        }
    },
    MOF_RUBRIC = {
        "base": [0, 100, 200, 225, 275],
        "score": [1500000000, 2000000000, 2050000000, 2100000000],
        "increment": [2, 10, 5, 10, 15],
        "per": [30000000, 50000000, 10000000, 10000000, 10000000]
    },
    MAX_LAST_SPELLS = {
        "Easy": {
            "FinalA": 1,
            "FinalB": 5
        },
        "Normal": {
            "FinalA": 6,
            "FinalB": 10
        },
        "Hard": {
            "FinalA": 6,
            "FinalB": 10
        },
        "Lunatic": {
            "FinalA": 6,
            "FinalB": 10
        }
    };

$(document).ready(function() {
    checkValues(true, true);
    generateRubrics();
});

function checkValues(changePerformance, changeShottypes) {
    var game = $(GAME).val(), difficulty = $(DIFFICULTY).val(), challenge = $(CHALLENGE).val(), shottype = $(SHOTTYPE).val();
    
    if (challenge == "Survival") {
        if (game == "MoF" && shottype == "MarisaB") {
            $(NOTIFY).html(NOTIFY_TEXT + "usage of the MarisaB damage bug is BANNED in survival.");
        } else if (game == "TD") {
            $(NOTIFY).html(NOTIFY_TEXT + "manual trances count as bombs (that is, trances from pressing C).");
        } else if (game == "PCB") {
            $(NOTIFY).html(NOTIFY_TEXT + "border breaks count as bombs (even if they are accidental).");
        } else {
            $(NOTIFY).html("");
        }
    }
    
    
    if (changePerformance) {
        $(ROUTE).css("display", "none");
        
        if (changeShottypes) {
            if (game == "PCB") {
                $(DIFFICULTY).html(PHANTASM);
                phantasm = true;
            } else if (phantasm) {
                $(DIFFICULTY).html(DIFF_OPTIONS);
                phantasm = false;
            }
            
            if (game == "HRtP" || game == "PoDD") {
                $(DIFFICULTY).html(NO_EXTRA);
                noExtra = true;
            } else if (game != "PCB" && noExtra) {
                $(DIFFICULTY).html(DIFF_OPTIONS);
                noExtra = false;
            }
        }
        
        if (challenge == "Survival") {
            var survOptions = MISSES_INPUT;
            
            if (game == "PoDD") {
                survOptions += "<br><label for='nb'>No Bomb</label><input id='nb' type='checkbox'>";
                survOptions = survOptions.replace("Misses</label>", "Rounds lost</label>").replace("max=100", "max=5");
            } else if (game == "PoFV") {
                survOptions += "<br><label for='nb'>No Charge Attacks</label><input id='nb' type='checkbox'>";
                survOptions = survOptions.replace("Misses</label>", "Rounds lost</label>").replace("max=100", "max=8");
            } else {
                survOptions += "<br><label for='bombs'>Bombs</label><input id='bombs' type='number' value=0 min=0 max=100>";
                
                if (game == "PCB") {
                    survOptions += "<br><label for='bb'>Border Breaks Only</label><input id='bb' type='checkbox'>"
                }
                
                if (game == "IN") {
                    difficulty = $(DIFFICULTY).val();
                    
                    if (difficulty == "Extra") {
                        survOptions += "<br><label for='is'>Imperishable Shooting Captured</label><input id='is' type='checkbox'>";
                    } else {
                        survOptions += "<br><label for='ls'>Last Spells Captured</label><input id='ls' type='number' value=0 min=0 max=10>";
                        $(ROUTE).css("display", "inline");
                    }
                }
            }
            
            $(PERFORMANCE).html(survOptions);
        } else {
            if (game == "MoF") {
                $(PERFORMANCE).html(SCORE_OPTIONS + "<br><label for='cleared'>Cleared</label><input id='cleared' type='checkbox'>");
            } else {
                $(PERFORMANCE).html(SCORE_OPTIONS);
            }
            
            $(NOTIFY).html("");
        }
    }
    
    if (changeShottypes) {
        checkShottypes(true);
    }
}

function checkShottypes(alwaysChange) {
    var game = $(GAME).val(), challenge = $(CHALLENGE).val(), difficulty = $(DIFFICULTY).val(), shottypes = Object.keys(WRs[game][difficulty]), shottypeList = "";
    
    for (var i in shottypes) {
        var shottype = (shottypes[i].indexOf("Team") > -1 ? shottypes[i].replace("Team", " Team") : shottypes[i]);
        
        shottypeList += "<option value='" + shottypes[i] + "'>" + shottype + "</option>";
    }
    
    if (alwaysChange) {
        $(SHOTTYPE).html(shottypeList);
    }
    
    if (game == "MoF" && challenge == "Scoring" || game == "GFW" && difficulty == "Extra") {
        $(SHOTTYPE).html("<option value='-'>-</option>");
        noShottypes = true;
    } else if (noShottypes) {
        $(SHOTTYPE).html(shottypeList);
        noShottypes = false;
    }
}

function isPhantasmagoria(game) {
    return game == "PoDD" || game == "PoFV";
}

function drcPoints() {
    var game = $(GAME).val(), difficulty = $(DIFFICULTY).val(), challenge = $(CHALLENGE).val(), shottype = $(SHOTTYPE).val(), rubric, points;
    
    if (challenge == "Survival") {
        if (!SURV_RUBRICS[game]) {
            $(ERROR).html(ERROR_TEXT + "the survival rubrics for this game are undetermined as of now.</b>");
            $(DRCPOINTS).html("Your DRC points for this run: <b>0</b>!");
            return;
        } else {
            $(ERROR).html("");
        }
        
        rubric = SURV_RUBRICS[game][difficulty];
        shottypeMultiplier = (SURV_RUBRICS[game].multiplier[shottype] ? SURV_RUBRICS[game].multiplier[shottype] : 1);
        points = (isPhantasmagoria(game) ? phantasmagoria(rubric, game, difficulty, shottypeMultiplier) : survivalPoints(rubric, game, difficulty, shottypeMultiplier));
    } else {
        rubric = (game != "MoF" ? SCORE_RUBRICS[game][difficulty] : undefined);
        points = scoringPoints(rubric, game, difficulty, shottype);
    }
    
    $(DRCPOINTS).html("Your DRC points for this run: <b>" + points + "</b>!");
}

function phantasmagoria(rubric, game, difficulty, shottypeMultiplier) {
    var roundsLost = Number($(MISSES).val()), bonus;
    
    if (roundsLost > rubric.lives) {
        $(ERROR).html(ERROR_TEXT + "the number of rounds lost cannot exceed " + rubric.lives + ".");
        return 0;
    } else {
        $(ERROR).html("");
    }

    bonus = $(NB).is(":checked") ? rubric.noBombBonus : 0;
    
    if (difficulty == "Extra") {
        shottypeMultiplier = 1;
    }
    
    return Math.round(shottypeMultiplier * (rubric.base - ((rubric.base - rubric.min) / rubric.lives * roundsLost))) + bonus;
}

function survivalPoints(rubric, game, difficulty, shottypeMultiplier) {
    var misses = Number($(MISSES).val()), bombs = Number($(BOMBS).val()), n = 0, route, lastSpells, originalBombs;
    
    $(ERROR).html("");
    n += misses * rubric.miss;
    originalBombs = bombs;
    
    if (bombs >= 1 && !(game == "PCB" && $(BB).is(":checked"))) {
        n += rubric.firstBomb;
        bombs -= 1;
    }
    
    n += bombs * rubric.bomb;
    
    drcpoints = Math.round(rubric.base * Math.pow(rubric.exp, -n));
    
    if (game == "IN") {
        if (difficulty == "Extra") {
            drcpoints += ($(IS).is(":checked") ? 5 : 0);
        } else {
            route = $(ROUTE).val();
            lastSpells = $(LS).val();
            
            if (lastSpells > MAX_LAST_SPELLS[difficulty][route]) {
                $(ERROR).html(ERROR_TEXT + "the number of Last Spells captured in a " + route + " clear on " + difficulty + " cannot exceed " + MAX_LAST_SPELLS[difficulty][route] + ".");
                return 0;
            }
            
            drcpoints += lastSpells * (difficulty == "Easy" ? 1 : 2);
        }
    }
    
    if (difficulty != "Extra") {
        drcpoints = Math.round(drcpoints * shottypeMultiplier);
    }
    
    return drcpoints;
}

function mofFormula(score) {
    var originalScore = score, clearBonus = ($(CLEARED).is(":checked") ? 15 : 0), i;
    
    for (i = 0; i < MOF_RUBRIC.increment.length; i++) {
        drcpoints = MOF_RUBRIC.base[i] + clearBonus;
        
        if (i == MOF_RUBRIC.score.length || originalScore < MOF_RUBRIC.score[i]) {
            while (score >= MOF_RUBRIC.per[i]) {
                score -= MOF_RUBRIC.per[i];
                drcpoints += MOF_RUBRIC.increment[i];
            }
            
            return drcpoints;
        }
        
        score = originalScore - (MOF_RUBRIC.score[i] ? MOF_RUBRIC.score[i] : MOF_RUBRIC.score[MOF_RUBRIC.score.length - 1]);
    }
}

function scoringPoints(rubric, game, difficulty, shottype) {
    var score = Number($(SCORE).val().replace(/,/g, "").replace(/\./g, "").replace(/ /g, "")), wr;
    
    if (isNaN(score)) {
        $(ERROR).html(ERROR_TEXT + "invalid score.</b>");
        return 0;
    } else {
        $(ERROR).html("");
    }
    
    if (game == "MoF") {
        return mofFormula(score);
    } else if (game == "SoEW" && difficulty == "Hard") {
        wr = WRs[game][difficulty]["ReimuB"][0];
    } else if (game == "SoEW" && difficulty == "Lunatic") {
        wr = WRs[game][difficulty]["ReimuA"][0];
    } else if (game == "LLS") {
        wr = WRs[game][difficulty];
        
        if (difficulty == "Easy" || difficulty == "Normal") {
            wr = wr["ReimuB"][0];
        } else if (difficulty == "Hard") {
            wr = wr["ReimuA"][0];
        } else if (difficulty == "Lunatic" || difficulty == "Extra") {
            wr = wr["MarisaA"][0];
        }
    } else {
        wr = WRs[game][difficulty][shottype][0];
    }
    
    return (score >= wr ? rubric.base : Math.round(rubric.base * Math.pow((score / wr), rubric.exp)));
}

function abbreviate(num) {
    return String(num).replace("000000000", "b").replace("100000000", ".1b").replace("500000000", ".5b").replace("050000000", ".05b").replace("0000000", "0m").replace("000000", "m");
}

function generateRubrics() {
    var game, difficulty, rubric, shottype, scoreRange, i;
    
    for (game in SCORE_RUBRICS) {
        $(SCORING_TABLE).append("<tr>");
        $(SCORING_TABLE).append(game == "HRtP" ? "<th>Game</th><th>Base points</th><th>Exponent</th>" : "<th></th><td></td><td></td>");
        $(SCORING_TABLE).append("</tr>");
        
        for (difficulty in SCORE_RUBRICS[game]) {
            rubric = SCORE_RUBRICS[game][difficulty];
            $(SCORING_TABLE).append("<tr><th>" + game + " " + difficulty + "</th><td>" + rubric.base + "</td><td>" + rubric.exp + "</td></tr>");
        }
    }
    
    for (game in SURV_RUBRICS) {
        if (isPhantasmagoria(game)) {
            $(PHANTASMAGORIA).append("<tr>");
            $(PHANTASMAGORIA).append(game == "PoDD" ? "<th>Game</th><th>Base points</th><th>Min points</th><th>No Bomb bonus</th>" : "<th></th><td></td><td></td><td></td>");
            $(PHANTASMAGORIA).append("</tr>");
        } else {
            $(SURV_TABLE).append("<tr>");
            $(SURV_TABLE).append(game == "SoEW" ? "<th>Game</th><th>Base points</th><th>Exponent</th><th>Lost life (n)</th>" +
            "<th>First bomb (n)</th><th>Further bombs (n)</th>" : "<th></th><td></td><td></td><td></td><td></td><td></td>");
            $(SURV_TABLE).append("</tr>");
        }
        
        for (difficulty in SURV_RUBRICS[game]) {
            rubric = SURV_RUBRICS[game][difficulty];
            
            if (difficulty == "multiplier") {
                $(SHOTTYPE_MULTIPLIERS).append("<tr>");
                $(SHOTTYPE_MULTIPLIERS).append(game == "SoEW" ? "<th>Game and shottype</th><th>Multiplier</th><" : "<th></th><td></td>");
                $(SHOTTYPE_MULTIPLIERS).append("</tr>");
                
                for (shottype in rubric) {
                    $(SHOTTYPE_MULTIPLIERS).append("<tr><th>" + game + " " + shottype.replace("Team", " Team") + "</th><td>" + rubric[shottype] + "</td></tr>");
                }
                
                continue;
            }
            
            if (isPhantasmagoria(game)) {
                $(PHANTASMAGORIA).append("<tr><th>" + game + " " + difficulty + "</th><td>" + rubric.base + "</td><td>" + rubric.min +
                "</td><td>" + rubric.noBombBonus + "</td></tr>");
            } else {
                $(SURV_TABLE).append("<tr><th>" + game + " " + difficulty + "</th><td>" + rubric.base + "</td><td>" + rubric.exp +
                "</td><td>" + rubric.miss + "</td><td>" + rubric.firstBomb + "</td><td>" + rubric.bomb + "</td></tr>");
            }
        }
    }
    
    $(MOF_TABLE).append("<tr><th>Score range</th><th>Base points</th><th>Incrementing</th></tr>");
    
    for (i = 0; i < MOF_RUBRIC.base.length; i++) {
        if (i == MOF_RUBRIC.score.length) {
            scoreRange = ">= " + abbreviate(MOF_RUBRIC.score[MOF_RUBRIC.score.length - 1]);
        } else {
            if (i === 0) {
                scoreRange = "< " + abbreviate(MOF_RUBRIC.score[i]);
            } else {
                scoreRange = abbreviate(MOF_RUBRIC.score[i - 1]) + " -< " + abbreviate(MOF_RUBRIC.score[i]);
            }
        }
        
        $(MOF_TABLE).append("<tr><td>" + scoreRange + "</td><td>" + abbreviate(MOF_RUBRIC.base[i]) + "</td><td>+" + MOF_RUBRIC.increment[i] + " for every " + abbreviate(MOF_RUBRIC.per[i]) + "</td></tr>");
    }
}

function showRubrics() {
    $(RUBRICS).css("display", "block");
    $(RUBRICS_BUTTON).attr("onClick", "javascript:hideRubrics()");
    $(RUBRICS_BUTTON).val("Hide Rubrics");
}

function hideRubrics() {
    $(RUBRICS).css("display", "none");
    $(RUBRICS_BUTTON).attr("onClick", "javascript:showRubrics()");
    $(RUBRICS_BUTTON).val("Show Rubrics");
}