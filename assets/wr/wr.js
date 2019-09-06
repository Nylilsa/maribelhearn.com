var WRs,LIMIT=16,playerWRs,westScores,seasonsEnabled,datesEnabled,notation="DMY",language="English",selected="",skips=[],all=["overall","HRtP","SoEW","PoDD","LLS","MS","EoSD","PCB","IN","PoFV","MoF","SA","UFO","GFW","TD","DDC","LoLK","HSiFS","WBaWC"],windows=["EoSD","PCB","IN","PoFV","MoF","SA","UFO","GFW","TD","DDC","LoLK","HSiFS","WBaWC"],pc98=["HRtP","SoEW","PoDD","LLS","MS"],lastUpdate="August 12, 2019";String.prototype.removeChar=function(){return this.replace("Reimu","").replace("Cirno","").replace("Aya","").replace("Marisa","")};String.prototype.removeSeason=function(){return this.replace("Spring","").replace("Summer","").replace("Autumn","").replace("Winter","")};function ymd(date){var tmp;date=date.replace("<br>","");tmp=date.split('/');if(notation=="DMY"){day=tmp[0],month=tmp[1],year=tmp[2]}else{day=tmp[1],month=tmp[0],year=tmp[2]}notation="YMD";return year+"年"+month+"月"+day+"日"}function dmy(date){var tmp;date=date.replace("<br>","");if(date.contains('年')){date=date.replace('年','/').replace('月','/').replace('日','/');tmp=date.split('/');day=tmp[2],month=tmp[1],year=tmp[0]}else{tmp=date.split('/');day=tmp[1],month=tmp[0],year=tmp[2]}return day+"/"+month+"/"+year}function mdy(date){var tmp;date=date.replace("<br>","");if(date.contains('年')){date=date.replace('年','/').replace('月','/').replace('日','/');tmp=date.split('/');day=tmp[2],month=tmp[1],year=tmp[0]}else{tmp=date.split('/');day=tmp[0],month=tmp[1],year=tmp[2]}return month+"/"+day+"/"+year}function generateText(){var datestrings=$(".datestring"),date,i;if(language=="English"){$(".HRtP").html("HRtP");$(".SoEW").html("SoEW");$(".PoDD").html("PoDD");$(".LLS").html("LLS");$(".MS").html("MS");$(".EoSD").html("EoSD");$(".PCB").html("PCB");$(".IN").html("IN");$(".PoFV").html("PoFV");$(".MoF").html("MoF");$(".SA").html("SA");$(".UFO").html("UFO");$(".DS").html("DS");$(".GFW").html("GFW");$(".TD").html("TD");$(".DDC").html("DDC");$(".LoLK").html("LoLK");$(".HSiFS").html("HSiFS");$(".WBaWC").html("WBaWC");$("title").html("Touhou World Records");$("h1").html("Touhou World Records");$(".game").html("Game");$(".player").html("Player");$(".difficulty").html("Difficulty");$(".shottype").html("Shottype");$(".route").html("Route");$(".date").html("Date");$(".dates").html("Dates");$(".overall").html("Overall");$(".overallrecords").html("Overall Records");$(".worldrecords").html("World Records");$(".westernrecords").html("Western Records");$(".playerranking").html("Player Ranking");$(".windows").html("Windows");$(".pc98").html("PC-98");$(".world").html("World");$(".wr").html("World Records");$(".west").html("West");$(".percentage").html("Percentage");$(".ack").html("Acknowledgements");$("#description").html("An accurate list of Touhou world records, updated every so often. Note that the player ranking at the bottom does not take into account how strong specific records are, only numbers. The list does not include scene games as of now.");$("#clicktodl").html("Click a score to download the corresponding replay, if there is one available. All of the table columns are sortable.");$("#noreup").html("The replays provided are <strong>not</strong> meant to be reuploaded to any replay uploading services.");$("#lastupdate").html("World records are current as of "+(notation=="DMY"?translateDate(lastUpdate,"DMY"):lastUpdate)+".");$("#contents_header").html("Contents");$("#clickgame").html("Click a game cover to show its list of world records.");$("#score").html("Score");$("#label_all").html("All");$("#autosort").html("No. of WRs");$("#differentgames").html("Different games");$("#jptlcredit").html("The Japanese translation of the top text was done by <a href='https://twitter.com/toho_yumiya'>Yu-miya</a>.");$("#cntlcredit").html("The Chinese translation of the top text was done by <a href='https://twitter.com/williewillus'>williewillus</a>.");$("#backtotop").html("Back to Top")}else if(language=="Japanese"){$(".HRtP").html("靈");$(".SoEW").html("封");$(".PoDD").html("夢");$(".LLS").html("幻");$(".MS").html("怪");$(".EoSD").html("紅");$(".PCB").html("妖");$(".IN").html("永");$(".PoFV").html("花");$(".MoF").html("風");$(".SA").html("地");$(".UFO").html("星");$(".GFW").html("大");$(".TD").html("神");$(".DDC").html("輝");$(".LoLK").html("紺");$(".HSiFS").html("天");$(".WBaWC").html("鬼");$("title").html("東方の世界記録");$("h1").html("東方の世界記録");$(".game").html("ゲーム");$(".player").html("プレイヤー");$(".difficulty").html("難易度");$(".shottype").html("キャラ");$(".route").html("ルート");$(".date").html("日付");$(".dates").html("日付");$(".overall").html("WR一覧");$(".overallrecords").html("各作品世界記録一覧");$(".worldrecords").html("世界記録");$(".westernrecords").html("海外記録");$(".playerranking").html("プレイヤーのランキング");$(".windows").html("Windows");$(".pc98").html("PC-98");$(".world").html("世界");$(".wr").html("世界記録");$(".west").html("海外");$(".percentage").html("割合");$(".ack").html("謝辞");$("#description").html("東方原作STG各作品世界記録の正確なリストです。適宜頻繁に更新します。下部に記載されているプレイヤーランキングは特定のスコアの高低を示すものではなく、あくまで世界記録取得数を示したものですのでご留意ください。また今のところ文花帖のようなシーンを基準にするリストは作成しておりません。");$("#clicktodl").html("該当のリプレイファイルをダウンロードするにはスコアをクリックしてください。各欄は並べ替え可能となっています。並べ替えには各表の最上段をクリックしてください。");$("#noreup").html("リプレイファイルの二次利用は禁止致します。");$("#lastupdate").html(translateDate(lastUpdate,"YMD")+"現在の世界記録です。");$("#contents_header").html("内容");$("#clickgame").html("世界記録リストはゲームをクリック。");$("#score").html("スコア");$("#label_all").html("全");$("#autosort").html("WR数");$("#differentgames").html("ゲーム");$("#jptlcredit").html("ページ上部のテキストは<a href='https://twitter.com/toho_yumiya'>Yu-miya</a>によって日本語に翻訳されました。");$("#cntlcredit").html("ページ上部のテキストは<a href='https://twitter.com/williewillus'>williewillus</a>によって中国語に翻訳されました。");$("#backtotop").html("上に帰る")}else{$(".HRtP").html("灵");$(".SoEW").html("封");$(".PoDD").html("梦");$(".LLS").html("幻");$(".MS").html("怪");$(".EoSD").html("红");$(".PCB").html("妖");$(".IN").html("永");$(".PoFV").html("花");$(".MoF").html("风");$(".SA").html("地");$(".UFO").html("星");$(".GFW").html("大");$(".TD").html("神");$(".DDC").html("辉");$(".LoLK").html("绀");$(".HSiFS").html("天");$(".WBaWC").html("鬼");$("title").html("东方世界纪录");$("h1").html("东方世界纪录");$(".game").html("游戏");$(".player").html("玩家");$(".difficulty").html("难度");$(".shottype").html("机体");$(".route").html("路线");$(".date").html("日期");$(".dates").html("日期");$(".overall").html("整体");$(".overallrecords").html("整体世界纪录");$(".worldrecords").html("世界纪录");$(".westernrecords").html("西方纪录");$(".playerranking").html("玩家排行");$(".windows").html("Windows");$(".pc98").html("PC-98");$(".world").html("世界");$(".wr").html("世界纪录");$(".west").html("西方");$(".percentage").html("百分");$(".ack").html("致谢");$("#description").html("这个网页准确地记载所有「东方Project」的打分世界记录，时不时地更新。注意：页底的玩家排行榜只算玩家们得到的记录有多少，并不算记录的强度。目前数据并不包括摄影游戏。");$("#clicktodl").html("点击任何分数即可下载对应的rep。点击任何标题即可排序表格内容。");$("#noreup").html("请勿将rep上传到别的存rep网站。");$("#lastupdate").html("世界记录更新于"+translateDate(lastUpdate,"YMD")+".");$("#contents_header").html("内容");$("#clickgame").html("单击游戏处查看世界纪录列表。");$("#score").html("分数");$("#label_all").html("皆");$("#autosort").html("WR数量");$("#differentgames").html("游戏");$("#jptlcredit").html("感谢<a href='https://twitter.com/toho_yumiya'>Yu-miya</a>提供头部文字的日语翻译。");$("#cntlcredit").html("感谢<a href='https://twitter.com/williewillus'>williewillus</a>提供头部文字的中文翻译。");$("#backtotop").html("回到顶部")}if(language=="Japanese"||language=="Chinese"){for(i=0;i<datestrings.length;i+=1){date=ymd($(datestrings[i]).html());$(datestrings[i]).html((i>LIMIT?"<br>":"")+date)}}else if(notation=="MDY"){for(i=0;i<datestrings.length;i+=1){date=mdy($(datestrings[i]).html());$(datestrings[i]).html((i>LIMIT?"<br>":"")+date)}}else{for(i=0;i<datestrings.length;i+=1){date=dmy($(datestrings[i]).html());$(datestrings[i]).html((i>LIMIT?"<br>":"")+date)}}}function generateTableText(){if(language=="English"){$(".HRtPf").html("Touhou 1 - The Highly Responsive to Prayers");$(".SoEWf").html("Touhou 2 - The Story of Eastern Wonderland");$(".PoDDf").html("Touhou 3 - Phantasmagoria of Dim.Dream");$(".LLSf").html("Touhou 4 - Lotus Land Story");$(".MSf").html("Touhou 5 - Mystic Square");$(".EoSDf").html("Touhou 6 - The Embodiment of Scarlet Devil");$(".PCBf").html("Touhou 7 - Perfect Cherry Blossom");$(".INf").html("Touhou 8 - Imperishable Night");$(".PoFVf").html("Touhou 9 - Phantasmagoria of Flower View");$(".MoFf").html("Touhou 10 - Mountain of Faith");$(".SAf").html("Touhou 11 - Subterranean Animism");$(".UFOf").html("Touhou 12 - Undefined Fantastic Object");$(".GFWf").html("Touhou 12.8 - Great Fairy Wars");$(".TDf").html("Touhou 13 - Ten Desires");$(".DDCf").html("Touhou 14 - Double Dealing Character");$(".LoLKf").html("Touhou 15 - Legacy of Lunatic Kingdom");$(".HSiFSf").html("Touhou 16 - Hidden Star in Four Seasons");$(".WBaWCf").html("Touhou 17 - Wily Beast and Weakest Creature");$(".Makai").html("Makai");$(".Jigoku").html("Jigoku");$(".ReimuA").html("ReimuA");$(".ReimuB").html("ReimuB");$(".ReimuC").html("ReimuC");$(".Reimu").html("Reimu");$(".Mima").html("Mima");$(".Marisa").html("Marisa");$(".Ellen").html("Ellen");$(".Kotohime").html("Kotohime");$(".Kana").html("Kana");$(".Rikako").html("Rikako");$(".Chiyuri").html("Chiyuri");$(".Yumemi").html("Yumemi");$(".Yuuka").html("Yuuka");$(".MarisaA").html("MarisaA");$(".MarisaB").html("MarisaB");$(".SakuyaA").html("SakuyaA");$(".SakuyaB").html("SakuyaB");$(".BorderTeam").html("Border Team");$(".MagicTeam").html("Magic Team");$(".ScarletTeam").html("Scarlet Team");$(".GhostTeam").html("Ghost Team");$(".Yukari").html("Yukari");$(".Alice").html("Alice");$(".Sakuya").html("Sakuya");$(".Remilia").html("Remilia");$(".Youmu").html("Youmu");$(".Yuyuko").html("Yuyuko");$(".Reisen").html("Reisen");$(".Cirno").html("Cirno");$(".Lyrica").html("Lyrica");$(".Mystia").html("Mystia");$(".Tewi").html("Tewi");$(".Aya").html("Aya");$(".Medicine").html("Medicine");$(".Komachi").html("Komachi");$(".Eiki").html("Eiki");$(".MarisaC").html("MarisaC");$(".SanaeA").html("SanaeA");$(".SanaeB").html("SanaeB");$(".Sanae").html("Sanae");$(".Spring").html("<br>Spring");$(".Summer").html("<br>Summer");$(".Autumn").html("<br>Autumn");$(".Winter").html("<br>Winter");$(".ReimuSpring").html("ReimuSpring");$(".CirnoSpring").html("CirnoSpring");$(".AyaSpring").html("AyaSpring");$(".MarisaSpring").html("MarisaSpring");$(".ReimuSummer").html("ReimuSummer");$(".CirnoSummer").html("CirnoSummer");$(".AyaSummer").html("AyaSummer");$(".MarisaSummer").html("MarisaSummer");$(".ReimuAutumn").html("ReimuAutumn");$(".CirnoAutumn").html("CirnoAutumn");$(".AyaAutumn").html("AyaAutumn");$(".MarisaAutumn").html("MarisaAutumn");$(".ReimuWinter").html("ReimuWinter");$(".CirnoWinter").html("CirnoWinter");$(".AyaWinter").html("AyaWinter");$(".MarisaWinter").html("MarisaWinter");$(".ReimuWolf").html("ReimuWolf");$(".ReimuOtter").html("ReimuOtter");$(".ReimuEagle").html("ReimuEagle");$(".MarisaWolf").html("MarisaWolf");$(".MarisaOtter").html("MarisaOtter");$(".MarisaEagle").html("MarisaEagle");$(".YoumuWolf").html("YoumuWolf");$(".YoumuOtter").html("YoumuOtter");$(".YoumuEagle").html("YoumuEagle");$(".shottype").html("Shottype");$("#label_seasons").html("Seasons")}else if(language=="Japanese"){$(".HRtPf").html("東方靈異伝　～ The Highly Responsive to Prayers");$(".SoEWf").html("東方封魔録　～ the Story of Eastern Wonderland");$(".PoDDf").html("東方夢時空　～ Phantasmagoria of Dim.Dream");$(".LLSf").html("東方幻想郷　～ Lotus Land Story");$(".MSf").html("東方怪綺談　～ Mystic Square");$(".EoSDf").html("東方紅魔郷　～ the Embodiment of Scarlet Devil");$(".PCBf").html("東方妖々夢　～ Perfect Cherry Blossom");$(".INf").html("東方永夜抄　～ Imperishable Night");$(".PoFVf").html("東方花映塚　～ Phantasmagoria of Flower View");$(".MoFf").html("東方風神録　～ Mountain of Faith");$(".SAf").html("東方地霊殿　～ Subterranean Animism");$(".UFOf").html("東方星蓮船　～ Undefined Fantastic Object");$(".GFWf").html("妖精大戦争　～ 東方三月精");$(".TDf").html("東方神霊廟　～ Ten Desires");$(".DDCf").html("東方輝針城　～ Double Dealing Character");$(".LoLKf").html("東方紺珠伝　～ Legacy of Lunatic Kingdom");$(".HSiFSf").html("東方天空璋　～ Hidden Star in Four Seasons");$(".WBaWCf").html("東方鬼形獣　～ Wily Beast and Weakest Creature");$(".Makai").html("魔界");$(".Jigoku").html("地獄");$(".ReimuA").html("霊夢A");$(".ReimuB").html("霊夢B");$(".ReimuC").html("霊夢C");$(".Reimu").html("霊夢");$(".Mima").html("魅魔");$(".Marisa").html("魔理沙");$(".Ellen").html("エレン");$(".Kotohime").html("小兎姫");$(".Kana").html("カナ");$(".Rikako").html("理香子");$(".Chiyuri").html("ちゆり");$(".Yumemi").html("夢美");$(".Yuuka").html("幽香");$(".MarisaA").html("魔理沙A");$(".MarisaB").html("魔理沙B");$(".SakuyaA").html("咲夜A");$(".SakuyaB").html("咲夜B");$(".BorderTeam").html("霊夢＆紫");$(".MagicTeam").html("魔理沙＆アリス");$(".ScarletTeam").html("咲夜＆レミリア");$(".GhostTeam").html("妖夢＆幽々子");$(".Yukari").html("紫");$(".Alice").html("アリス");$(".Sakuya").html("咲夜");$(".Remilia").html("レミリア");$(".Youmu").html("妖夢");$(".Yuyuko").html("幽々子");$(".Reisen").html("鈴仙");$(".Cirno").html("チルノ");$(".Lyrica").html("リリカ");$(".Mystia").html("ミスティア");$(".Tewi").html("てゐ");$(".Aya").html("文");$(".Medicine").html("メディスン");$(".Komachi").html("小町");$(".Eiki").html("映姫");$(".MarisaC").html("魔理沙C");$(".SanaeA").html("早苗A");$(".SanaeB").html("早苗B");$(".Sanae").html("早苗");$(".Spring").html("春");$(".Summer").html("夏");$(".Autumn").html("秋");$(".Winter").html("冬");$(".ReimuSpring").html("霊夢春");$(".CirnoSpring").html("チルノ春");$(".AyaSpring").html("文春");$(".MarisaSpring").html("魔理沙春");$(".ReimuSummer").html("霊夢夏");$(".CirnoSummer").html("チルノ夏");$(".AyaSummer").html("文夏");$(".MarisaSummer").html("魔理沙夏");$(".ReimuAutumn").html("霊夢秋");$(".CirnoAutumn").html("チルノ秋");$(".AyaAutumn").html("文秋");$(".MarisaAutumn").html("魔理沙秋");$(".ReimuWinter").html("霊夢冬");$(".CirnoWinter").html("チルノ冬");$(".AyaWinter").html("文冬");$(".MarisaWinter").html("魔理沙冬");$(".ReimuWolf").html("霊夢狼");$(".ReimuOtter").html("霊夢獺");$(".ReimuEagle").html("霊夢鷲");$(".MarisaWolf").html("魔理沙狼");$(".MarisaOtter").html("魔理沙獺");$(".MarisaEagle").html("魔理沙鷲");$(".YoumuWolf").html("妖夢狼");$(".YoumuOtter").html("妖夢獺");$(".YoumuEagle").html("妖夢鷲");$(".shottype").html("キャラ");$("#label_seasons").html("季節")}else{$(".HRtPf").html("东方灵异传　～ The Highly Responsive to Prayers");$(".SoEWf").html("东方封魔录　～ the Story of Eastern Wonderland");$(".PoDDf").html("东方梦时空　～ Phantasmagoria of Dim.Dream");$(".LLSf").html("东方幻想乡　～ Lotus Land Story");$(".MSf").html("东方怪绮谈　～ Mystic Square");$(".EoSDf").html("东方红魔乡　～ the Embodiment of Scarlet Devil");$(".PCBf").html("东方妖妖梦　～ Perfect Cherry Blossom");$(".INf").html("东方永夜抄　～ Imperishable Night");$(".PoFVf").html("东方花映塚　～ Phantasmagoria of Flower View");$(".MoFf").html("东方风神录　～ Mountain of Faith");$(".SAf").html("东方地灵殿　～ Subterranean Animism");$(".UFOf").html("东方星莲船　～ Undefined Fantastic Object");$(".GFWf").html("妖精大战争　～ 东方三月精");$(".TDf").html("东方神灵庙　～ Ten Desires");$(".DDCf").html("东方辉针城　～ Double Dealing Character");$(".LoLKf").html("东方绀珠传　～ Legacy of Lunatic Kingdom");$(".HSiFSf").html("东方天空璋　～ Hidden Star in Four Seasons");$(".WBaWCf").html("东方鬼形獣　～ Wily Beast and Weakest Creature");$(".Makai").html("魔界");$(".Jigoku").html("地狱");$(".ReimuA").html("灵梦A");$(".ReimuB").html("灵梦B");$(".ReimuC").html("灵梦C");$(".Reimu").html("灵梦");$(".Mima").html("魅魔");$(".Marisa").html("魔理沙");$(".Ellen").html("爱莲");$(".Kotohime").html("小兔姬");$(".Kana").html("卡娜");$(".Rikako").html("理香子");$(".Chiyuri").html("千百合");$(".Yumemi").html("梦美");$(".Yuuka").html("幽香");$(".MarisaA").html("魔理沙A");$(".MarisaB").html("魔理沙B");$(".SakuyaA").html("咲夜A");$(".SakuyaB").html("咲夜B");$(".BorderTeam").html("结界组");$(".MagicTeam").html("咏唱组");$(".ScarletTeam").html("红魔组");$(".GhostTeam").html("幽冥组");$(".Yukari").html("紫");$(".Alice").html("爱丽丝");$(".Sakuya").html("咲夜");$(".Remilia").html("蕾米莉亚");$(".Youmu").html("妖梦");$(".Yuyuko").html("幽幽子");$(".Reisen").html("铃仙");$(".Cirno").html("琪露诺");$(".Lyrica").html("莉莉卡");$(".Mystia").html("米丝蒂亚");$(".Tewi").html("帝");$(".Aya").html("文");$(".Medicine").html("梅蒂薪");$(".Komachi").html("小町");$(".Eiki").html("映姬");$(".MarisaC").html("魔理沙C");$(".SanaeA").html("早苗A");$(".SanaeB").html("早苗B");$(".Sanae").html("早苗");$(".Spring").html("春");$(".Summer").html("夏");$(".Autumn").html("秋");$(".Winter").html("冬");$(".ReimuSpring").html("灵梦春");$(".CirnoSpring").html("琪露诺春");$(".AyaSpring").html("文春");$(".MarisaSpring").html("魔理沙春");$(".ReimuSummer").html("灵梦夏");$(".CirnoSummer").html("琪露诺夏");$(".AyaSummer").html("文夏");$(".MarisaSummer").html("魔理沙夏");$(".ReimuAutumn").html("灵梦秋");$(".CirnoAutumn").html("琪露诺秋");$(".AyaAutumn").html("文秋");$(".MarisaAutumn").html("魔理沙秋");$(".ReimuWinter").html("灵梦冬");$(".CirnoWinter").html("琪露诺冬");$(".AyaWinter").html("文冬");$(".MarisaWinter").html("魔理沙冬");$(".ReimuWolf").html("灵梦狼");$(".ReimuOtter").html("灵梦獭");$(".ReimuEagle").html("灵梦鹰");$(".MarisaWolf").html("魔理沙狼");$(".MarisaOtter").html("魔理沙獭");$(".MarisaEagle").html("魔理沙鹰");$(".YoumuWolf").html("妖梦狼");$(".YoumuOtter").html("妖梦獭");$(".YoumuEagle").html("妖梦鹰");$(".shottype").html("机体");$("#label_seasons").html("季节")}}function bestSeason(difficulty,shottype){var shottypes=WRs.HSiFS[difficulty],max=0,season,i;for(i in shottypes){if(!i.contains(shottype)){continue}if(shottypes[i][0]>max){season=i.replace(shottype,"");max=shottypes[i][0]}}return season}function shottypeArray(game){var shottypes=[];for(shottype in WRs[game]["Easy"]){shottypes.pushStrict(seasonsEnabled?shottype:shottype.removeSeason())}return shottypes}function display(game){var shottypes=shottypeArray(game),compareWRs={},max=0,game,difficulty,bestshotmax,shottype,wr,score,player,replay,overall,overallplayer,overalldifficulty,overallshottype,overallseason,overalldate,bestshot,bestshotplayer,bestshotseason,bestshotdate,text,count,seasonless,extrashots,i;max;if(selected!==""){$("#"+selected).css("border",$("#"+selected).hasClass("cover98")?"1px solid black":"none")}if($("#fullname").hasClass(selected+"f")){$("#fullname").removeClass(selected+"f")}if($("#table").hasClass(selected+"t")){$("#table").removeClass(selected+"t")}$("#"+game).css("border","3px solid gold");selected=game;$("#fullname").addClass(game+"f");$("#fullname").html(fullNameNumber(game));$("#table").addClass(game+"t");$("#list_thead").html("<tr id='list_thead_tr'><th class='shottype'>Shottype</th></tr>");$("#list_tbody").html("");for(i=0;i<shottypes.length;i+=1){if(game=="HSiFS"&&seasonsEnabled){$("#list_tbody").append("<tr id='"+shottypes[i]+"'><td><span class='"+shottypes[i].removeSeason()+"'>"+shottypes[i].removeSeason()+"</span><span class='"+shottypes[i].removeChar()+"'>"+shottypes[i].removeChar()+"</span></td></tr>")}else{$("#list_tbody").append("<tr id='"+shottypes[i]+"'><td class='"+shottypes[i]+"'>"+shottypes[i]+"</td></tr>")}}for(difficulty in WRs[game]){if(game=="GFW"&&difficulty=="Extra"){$("#list_tbody").append("<tr id='"+shottypes[i]+"'><td>Extra</td><td id='GFWExtra-' colspan='4'></td></tr>")}else if(game=="HSiFS"&&difficulty=="Extra"&&seasonsEnabled){$("#list_thead_tr").append("<th class='sorttable_numeric'>Extra</th>");extrashots=["Reimu","Cirno","Aya","Marisa"];for(i=0;i<4;i+=1){$("#"+extrashots[i]+"Spring").append("<td id='"+game+difficulty+extrashots[i]+"' rowspan='4'></td>")}}else{$("#list_thead_tr").append("<th class='sorttable_numeric'>"+difficulty+"</th>");for(i=0;i<shottypes.length;i+=1){$("#"+shottypes[i]).append("<td id='"+game+difficulty+shottypes[i]+"'></td>")}}bestshotmax=0;for(shottype in WRs[game][difficulty]){season=shottype.removeChar();wr=WRs[game][difficulty][shottype];score=wr[0];player=wr[1];date=wr[2];if(wr[3]){replay=wr[3]}else{replay=(gameAbbr(game)<6?"":replayPath(game,difficulty,shottype))}if(score>max){overall="#"+game+difficulty+shottype;overallplayer=player;overalldifficulty=difficulty;overallshottype=shottype;overallseason=season;overalldate=date;max=score}if(score>bestshotmax){bestshot="#"+game+difficulty+shottype;bestshotplayer=player;bestshotseason=season;bestshotmax=score;bestshotreplay=replay;bestshotdate=date}text=(replay===""?sep(score):"<a class='replay' href='"+replay+"'>"+sep(score)+"</a>")+"<br>by <em>"+player+"</em>"+(date?"<span class='datestring'><span class='dimgrey'><br>"+date+"</span></span>":"");$("#"+game+difficulty+shottype).html(score>0?text:'-');seasonless=shottype.removeSeason();if(game=="HSiFS"&&shottype.removeChar()==bestSeason(difficulty,seasonless)){$("#"+game+difficulty+seasonless+(difficulty=="Extra"?"Small":"")).html(text+(game=="HSiFS"&&difficulty!="Extra"?" ("+bestSeason(difficulty,seasonless)+")":""))}}if(bestshotmax>0){$(bestshot).html((bestshotreplay===""?"<u>"+sep(bestshotmax)+"</u>":"<u><a class='replay' href='"+bestshotreplay+"'>"+sep(bestshotmax)+"</a></u>")+"<br>by <em>"+bestshotplayer+"</em>"+(bestshotdate?"<span class='datestring'><span class='dimgrey'><br>"+bestshotdate+"</span></span>":""));compareWRs[difficulty]=[bestshotmax,bestshotplayer,bestshot.replace("#"+game+difficulty,"")]}if(game=="HSiFS"){$(bestshot.removeSeason()+(difficulty=="Extra"?"Small":"")).html((bestshotreplay===""?"<u>"+sep(bestshotmax)+"</u>":"<u><a class='replay' href='"+bestshotreplay+"'>"+sep(bestshotmax)+"</a></u>")+"<br>by <em>"+bestshotplayer+"</em>"+(game=="HSiFS"&&difficulty!="Extra"?" ("+bestshotseason+")":"")+(bestshotdate?"<span class='datestring'><span class='dimgrey'><br>"+bestshotdate+"</span></span>":""))}}if(game=="MoF"){$(overall).html($(overall).html().replace("</strong>","*</strong>"))}if(game=="HSiFS"&&seasonsEnabled){$(overall).html($(overall).html().replace("<u>","<u><strong>").replace("</u>","</strong></u>"))}else{$(overall.removeSeason()).html($(overall.removeSeason()).html().replace("<u>","<u><strong>").replace("</u>","</strong></u>"))}$("#"+game+"overall0").html(sep(max));$("#"+game+"overall1").html(overallplayer);$("#"+game+"overall2").html(overalldifficulty);$("#"+game+"overall3").html("<span class='"+overallshottype+"'>"+overallshottype+"</span>");$("#"+game+"overall4").html("<span class='datestring'>"+(overalldate?overalldate:'-')+"</span>");$("#west_tbody").html("");if(!datesEnabled){disableDates()}var west,world,percentage;$("#west_thead").html("<tr><th class='world'>World</th><th class='west'>West</th><th class='percentage'>Percentage</th></tr>");for(difficulty in westScores[game]){if(westScores[game][difficulty].length===0){$("#"+game+difficulty).append("<td>-</td><th>-</th>");continue}west=westScores[game][difficulty][0];westPlayer=westScores[game][difficulty][1];westShottype=westScores[game][difficulty][2];world=compareWRs[difficulty][0];worldPlayer=compareWRs[difficulty][1];worldShottype=compareWRs[difficulty][2];percentage=(west/world*100).toFixed(2);$("#west_tbody").append("<tr><td colspan='3'><u>"+difficulty+"</u></td></tr>");$("#west_tbody").append("<tr><td>"+sep(world)+"<br>by <em>"+worldPlayer+"</em>"+(worldShottype!='-'?"<br>(<span class='"+worldShottype+"'>"+worldShottype+"</span>)":"")+"</td><td>"+sep(west)+"<br>by <em>"+westPlayer+"</em>"+(westShottype!='-'?"<br>(<span class='"+westShottype+"'>"+westShottype+"</span>)":"")+"</td><th class='"+percentageClass(percentage)+"'>("+(parseInt(percentage)==100?100:percentage)+"%)</th></tr>")}$("#list").css("display","block");$("#cheat").css("display",game=="MoF"?"block":"none");$("#seasontoggle").css("display",game=="HSiFS"?"block":"none");generateTableText()}function show(game,skip){if(skip&&skips.contains(game)){skips.remove(game);load()}}function hide(game,skip){if(skip&&!skips.contains(game)){skips.pushStrict(game);load()}}function checkGame(arg){if($("#"+arg+"c").is(":checked")){show(arg,true)}else{hide(arg,true)}}function checkWindows(){var checked=$("#windows").is(":checked");for(var key in windows){if(checked){$("#"+windows[key]+"c").prop("checked",true);show(windows[key],false);skips.remove(windows[key])}else{$("#"+windows[key]+"c").prop("checked",false);hide(windows[key],false);skips.pushStrict(windows[key])}}load()}function checkPC98(){var checked=$("#pc98").is(":checked");for(var key in pc98){if(checked){$("#"+pc98[key]+"c").prop("checked",true);show(pc98[key],false);skips.remove(pc98[key])}else{$("#"+pc98[key]+"c").prop("checked",false);hide(pc98[key],false);skips.pushStrict(pc98[key])}}load()}function checkAll(){var checked=$("#all").is(":checked");if(checked){$("#windows").prop("checked",true);$("#pc98").prop("checked",true)}else{$("#windows").prop("checked",false);$("#pc98").prop("checked",false)}for(var key in all){if(checked){$("#"+all[key]+"c").prop("checked",true);show(all[key],false);skips.remove(all[key])}else{$("#"+all[key]+"c").prop("checked",false);hide(all[key],false);skips.pushStrict(all[key])}}load()}function toggleSeasons(){seasonsEnabled=!seasonsEnabled;display("HSiFS")}function toggleDates(){var i;datesEnabled=!datesEnabled;for(i in all){if(all[i]=="overall"){continue}$("#"+all[i]+"overall4").css("display",datesEnabled?"table-cell":"none")}$(".date").css("display",datesEnabled?"table-cell":"none");$(".datestring").css("display",datesEnabled?"inline":"none")}function disableDates(){var i;for(i in all){if(all[i]=="overall"){continue}$("#"+all[i]+"overall4").css("display","none")}$(".date").css("display","none");$(".datestring").css("display","none")}function percentageClass(percentage){if(percentage<50){return "does_not_even_score"}else if(percentage<75){return "barely_even_scores"}else if(percentage<90){return "moderately_even_scores"}else if(percentage<100){return "does_even_score"}else{return "does_even_score_well"}}function gameAbbr(game){return({"HRtP":1,"SoEW":2,"PoDD":3,"LLS":4,"MS":5,"EoSD":6,"PCB":7,"IN":8,"PoFV":9,"MoF":10,"SA":11,"UFO":12,"GFW":128,"TD":13,"DDC":14,"LoLK":15,"HSiFS":16,"WBaWC":17})[game]}function shottypeAbbr(shottype){return({"Reimu":"Re","ReimuA":"RA","ReimuB":"RB","ReimuC":"RC","Marisa":"Ma","MarisaA":"MA","MarisaB":"MB","MarisaC":"MC","Sakuya":"Sa","SakuyaA":"SA","SakuyaB":"SB","Sanae":"Sa","SanaeA":"SA","SanaeB":"SB","BorderTeam":"BT","MagicTeam":"MT","ScarletTeam":"ST","GhostTeam":"GT","Yukari":"Yu","Alice":"Al","Remilia":"Rr","Youmu":"Yo","Yuyuko":"Yy","Reisen":"Ud","Cirno":"Ci","Lyrica":"Ly","Mystia":"My","Tewi":"Te","Aya":"Ay","Medicine":"Me","Yuuka":"Yu","Komachi":"Ko","Eiki":"Ei","A1":"A1","A2":"A2","B1":"B1","B2":"B2","C1":"C1","C2":"C2","-":"tr","ReimuSpring":"RS","ReimuSummer":"RU","ReimuAutumn":"RA","ReimuWinter":"RW","CirnoSpring":"CS","CirnoSummer":"CU","CirnoAutumn":"CA","CirnoWinter":"CW","AyaSpring":"AS","AyaSummer":"AU","AyaAutumn":"AA","AyaWinter":"AW","MarisaSpring":"MS","MarisaSummer":"MU","MarisaAutumn":"MA","MarisaWinter":"MW","ReimuWolf":"RW","ReimuOtter":"RO","ReimuEagle":"RE","MarisaWolf":"MW","MarisaOtter":"MO","MarisaEagle":"ME","YoumuWolf":"YW","YoumuOtter":"YO","YoumuEagle":"YE"})[shottype]}function replayPath(game,difficulty,shottype){return "replays/th"+gameAbbr(game)+"_ud"+difficulty.substr(0,2)+shottypeAbbr(shottype)+".rpy"}function load(){$.get("https://maribelhearn.com/json/wrlist.json",function(data){WRs=data;playerWRs={};var skip={},game,max,difficulty,shottype,wr,score,player,replay,overall,overallplayer,overalldifficulty,overallshottype,overallseason,overalldate,count,i;for(game in WRs){max=0;for(difficulty in WRs[game]){for(shottype in WRs[game][difficulty]){season=(game=="HSiFS"?shottype.removeChar():"");wr=WRs[game][difficulty][shottype];score=wr[0];player=wr[1];date=wr[2];if(score>max){overall="#"+game+difficulty+shottype;overallplayer=player;overalldifficulty=difficulty;overallshottype=shottype;overallseason=season;overalldate=date;max=score}if(player!==""){if(!playerWRs.hasOwnProperty(player)){playerWRs[player]={}}if(!playerWRs[player].hasOwnProperty(game)){playerWRs[player][game]=0}playerWRs[player][game]+=1}}}$("#"+game+"overall0").html(sep(max));$("#"+game+"overall1").html(overallplayer);$("#"+game+"overall2").html(overalldifficulty);$("#"+game+"overall3").html("<span class='"+overallshottype+"'>"+overallshottype+"</span>");$("#"+game+"overall4").html("<span class='datestring'>"+(overalldate?overalldate:'-')+"</span>")}$("#ranking_tbody").html("");for(player in playerWRs){count=0;for(game in playerWRs[player]){if(!$("#"+game+"c").is(":checked")||skips.contains(game)){skips.pushStrict(game);if(!skip.hasOwnProperty(player)){skip[player]=0}skip[player]+=1;continue}count+=playerWRs[player][game]}$("#ranking_tbody").append("<tr id='player_"+player+"'><td>"+player+"</td><td id='player_"+player+"n'>"+count+"</td><td id='player_"+player+"g'>"+Object.keys(playerWRs[player]).length+"</td></tr>")}if(getCookie("lang")=="Japanese"){language="Japanese";generateText()}else if(getCookie("lang")=="Chinese"){language="Chinese";generateText()}else{language="English";notation=(getCookie("datenotation")?getCookie("datenotation"):"DMY");if(notation=="DMY"){$("#lastupdate").html("World records are current as of "+translateDate(lastUpdate,"DMY")+".")}else if(notation=="MDY"){var datestrings=$(".datestring");for(i in datestrings){date=mdy($(datestrings[i]).html());$(datestrings[i]).html((i>LIMIT?"<br>":"")+date)}}}if(!datesEnabled){disableDates()}if(!$("#overallc").is(":checked")){hide("overall")}$("#autosort").click();$("#autosort").click()},"json");$.get("https://maribelhearn.com/json/bestinthewest.json",function(data){westScores=data},"json")}function setLanguage(newLanguage,newNotation){if(language==newLanguage&&notation==newNotation){return}language=newLanguage;setCookie("lang",newLanguage);notation=newNotation;setCookie("datenotation",newNotation);generateText();if(selected!==""){generateTableText()}}$(document).ready(function(){if(location.protocol=="file:"){var path=location.pathname.split('/').pop();$("#nav a").attr("href",function(i,oldHref){return(oldHref=='/'?location.href.replace(path,"index.html")+"":oldHref+".html")})}if(navigator.userAgent.contains("Mobile")||navigator.userAgent.contains("Tablet")){$("#notice").css("display","block")}seasonsEnabled=$("#seasons").is(":checked");datesEnabled=$("#dates").is(":checked");load();if(!datesEnabled){disableDates()}});
