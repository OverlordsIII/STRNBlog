import { Post } from "../types/post";

const posts: Record<string, Post> = {
    //name of file: require('./name of file).default,
    //testLeo: require('./testLeo').default,
	//[REPLACE]
	oldSeahawksDefensivePositionDraft: require('./oldSeahawksDefensivePositionDraft').default,
	oldTheCaseForDrewLockToBe: require('./oldTheCaseForDrewLockToBe').default,
	oldTheCaseForBakerMayfieldTo: require('./oldTheCaseForBakerMayfieldTo').default,
	oldSeahawksOffensiveDraftTargets: require('./oldSeahawksOffensiveDraftTargets').default,
	oldTheCaseForGenoSmithToBe: require('./oldTheCaseForGenoSmithToBe').default,
	oldSeattleSeahawksDraftRecap: require('./oldSeattleSeahawksDraftRecap').default,
	oldTheCaseForGardnerMinshew: require('./oldTheCaseForGardnerMinshew').default,
	oldReturnOfTheBigGunsTheTop: require('./oldReturnOfTheBigGunsTheTop').default,
	oldPositionalOverviewOfTheSeattle: require('./oldPositionalOverviewOfTheSeattle').default,
	oldSeahawksOffseasonPickups: require('./oldSeahawksOffseasonPickups').default,
	oldPositionalOverviewOfTheSeattled: require('./oldPositionalOverviewOfTheSeattled').default,
	MatchupsForSeahawksVsChiefs: require('./MatchupsForSeahawksVsChiefs').default,
	takeawaysFromSeahawksWinAgainst: require('./takeawaysFromSeahawksWinAgainst').default,
	freeAgencyMarketOverviewPosition: require('./freeAgencyMarketOverviewPosition').default,
	headlinesForSeahawksVsGiants: require('./headlinesForSeahawksVsGiants').default,
	topDefensiveLinemenMaziSmith: require('./topDefensiveLinemenMaziSmith').default,
	headlinesForSeahawksVsCowboys: require('./headlinesForSeahawksVsCowboys').default,
	findlaysUnderdogsHowRolandTank: require('./findlaysUnderdogsHowRolandTank').default,
	seahawksWrProfileOffseason: require('./seahawksWrProfileOffseason').default,
	seahawksEarlyAprilMockDraft: require('./seahawksEarlyAprilMockDraft').default,
	everythingSeahawksDavidHowesJerrick: require('./everythingSeahawksDavidHowesJerrick').default,
	takeawaysFromSeahawksVsCardinalsCaf: require('./takeawaysFromSeahawksVsCardinalsCaf').default,
	seahawksOffensiveRosterPredictions: require('./seahawksOffensiveRosterPredictions').default,
	MatchupsForSeahawksVsSaints: require('./MatchupsForSeahawksVsSaints').default,
	takeawaysFromSeahawksVsCowboys: require('./takeawaysFromSeahawksVsCowboys').default,
	takeawaysFromSeahawksThrilling: require('./takeawaysFromSeahawksThrilling').default,
	superBowlPredictions: require('./superBowlPredictions').default,
	MatchupsForSeahawksVsPanthers: require('./MatchupsForSeahawksVsPanthers').default,
	headlinesForSeahawksVsRamsGame: require('./headlinesForSeahawksVsRamsGame').default,
	MatchupsForSeahawksVsers: require('./MatchupsForSeahawksVsers').default,
	comingSoon: require('./comingSoon').default,
	theSeahawksImpendingFreeAgents: require('./theSeahawksImpendingFreeAgents').default,
	takeawaysFromTheSeahawksWinOver: require('./takeawaysFromTheSeahawksWinOver').default,
	takeawaysFromRavensVsSeahawks: require('./takeawaysFromRavensVsSeahawks').default,
	theSeahawksImpendingFreeAgents0: require('./theSeahawksImpendingFreeAgents0').default,
	recappingSeahawksFreeAgencyMoves: require('./recappingSeahawksFreeAgencyMoves').default,
	takeawaysFromSeahawksWinOvere: require('./takeawaysFromSeahawksWinOvere').default,
	headlinesForSeahawksVsRavens: require('./headlinesForSeahawksVsRavens').default,
	opinionTheSeahawksFutureIsHere: require('./opinionTheSeahawksFutureIsHere').default,
	MatchupsForSeahawksVsCardinalsCe: require('./MatchupsForSeahawksVsCardinalsCe').default,
	headlinesForSeahawksVsLions: require('./headlinesForSeahawksVsLions').default,
	headlinesForTheSeahawksVsers: require('./headlinesForTheSeahawksVsers').default,
	takeawaysFromSeahawksLossToThe: require('./takeawaysFromSeahawksLossToThe').default,
	headlinesForSeahawksVsBrowns: require('./headlinesForSeahawksVsBrowns').default,
	whosInWhosOutCfpTopPrediction: require('./whosInWhosOutCfpTopPrediction').default,
	analysisHowSeattlesTightsEnds: require('./analysisHowSeattlesTightsEnds').default,
	NflDraftScoutingTrentonSimpson: require('./NflDraftScoutingTrentonSimpson').default,
	seahawksPostFreeAgencyRoster: require('./seahawksPostFreeAgencyRoster').default,
	howMikeJackIsEmbracingTheNew: require('./howMikeJackIsEmbracingTheNew').default,
	takeawaysFromSeahawksVsBrowns: require('./takeawaysFromSeahawksVsBrowns').default,
	seahawksOlProfileOffseason: require('./seahawksOlProfileOffseason').default,
	everythingSeahawksDemetrisHarris: require('./everythingSeahawksDemetrisHarris').default,
	headlinesForSeahawksVsPanthers: require('./headlinesForSeahawksVsPanthers').default,
	seahawksWinOverLionsTakeaways: require('./seahawksWinOverLionsTakeaways').default,
	headlinesForTheSeahawksAgainst: require('./headlinesForTheSeahawksAgainst').default,
	whyJalenCarterIsASeahawkEverything: require('./whyJalenCarterIsASeahawkEverything').default,
	analysisSeahawksImprovingLbs: require('./analysisSeahawksImprovingLbs').default,
	takeawaysFromTheSeahawksWinOver0: require('./takeawaysFromTheSeahawksWinOver0').default,
	takeawaysFromSeahawksWinOver: require('./takeawaysFromSeahawksWinOver').default,
	takeawaysFromSeahawksVsRams: require('./takeawaysFromSeahawksVsRams').default,
	takeawaysFromSeahawksLossToRaiders: require('./takeawaysFromSeahawksLossToRaiders').default,
	seahawksQbProfileOffseason: require('./seahawksQbProfileOffseason').default,
	takeawaysFromSeahawksWinAgainstF: require('./takeawaysFromSeahawksWinAgainstF').default,
	seahawksFinalLateAprilMockDraft: require('./seahawksFinalLateAprilMockDraft').default,
	MatchupsForSeahawksVsBuccaneers: require('./MatchupsForSeahawksVsBuccaneers').default,
	MatchupsForSeahawksVsRams: require('./MatchupsForSeahawksVsRams').default,
	takeawaysFromSeahawksWinVsRams: require('./takeawaysFromSeahawksWinVsRams').default,
	headlinesForSeahawksVsCommanders: require('./headlinesForSeahawksVsCommanders').default,
	NflDraftScoutingDaiyanHenley: require('./NflDraftScoutingDaiyanHenley').default,
	dayTargetsTyreeWilsonDevon: require('./dayTargetsTyreeWilsonDevon').default,
	takeawaysFromSeahawksWildCard: require('./takeawaysFromSeahawksWildCard').default,
	seahawksInteractiveMockDraft: require('./seahawksInteractiveMockDraft').default,
	MatchupsForSeahawksVsLions: require('./MatchupsForSeahawksVsLions').default,
	theSeahawksExpectedRevampedDefensive: require('./theSeahawksExpectedRevampedDefensive').default,
	takeawaysFromSeahawksWinOver0: require('./takeawaysFromSeahawksWinOver0').default,
	seahawksRookiePrimerHowDoThey: require('./seahawksRookiePrimerHowDoThey').default,
	takeawaysFromSeahawksVsCardinals: require('./takeawaysFromSeahawksVsCardinals').default,
	howToUseTheSubstackEditor: require('./howToUseTheSubstackEditor').default,
	MatchupsForSeahawksVsJets: require('./MatchupsForSeahawksVsJets').default,
	takeawaysFromShootoutWinAgainst: require('./takeawaysFromShootoutWinAgainst').default,
	takeawaysFromSeahawksLossToThee: require('./takeawaysFromSeahawksLossToThee').default,
	freeAgencyMarketOverviewPositionF: require('./freeAgencyMarketOverviewPositionF').default,
	MatchupsForTheSeahawksPlayoff: require('./MatchupsForTheSeahawksPlayoff').default,
	takeawaysFromTheLossToTheers: require('./takeawaysFromTheLossToTheers').default,
	darrellTaylorsEmergenceAndWhy: require('./darrellTaylorsEmergenceAndWhy').default,
	bigGuccisAcclimationToTheNfl: require('./bigGuccisAcclimationToTheNfl').default,
	seahawksVsTitansHeadlines: require('./seahawksVsTitansHeadlines').default,
	seahawksMidseasonGrades: require('./seahawksMidseasonGrades').default,
	TopAnthonyRichardsonAndWill: require('./TopAnthonyRichardsonAndWill').default,
	headlinesForTheSeahawksAgainstd: require('./headlinesForTheSeahawksAgainstd').default,
	takeawaysFromSeahawksLossToers: require('./takeawaysFromSeahawksLossToers').default,
	seahawksMidLateAprilMockDraft: require('./seahawksMidLateAprilMockDraft').default,
	seahawksPostFreeAgencyRoster0: require('./seahawksPostFreeAgencyRoster0').default,
	seahawksRbProfileOffseason: require('./seahawksRbProfileOffseason').default,
	seattlesTargetsCoverCornerbacks: require('./seattlesTargetsCoverCornerbacks').default,
	seahawksPostFreeAgencyMockDraft: require('./seahawksPostFreeAgencyMockDraft').default,
	MatchupsForSeahawksVsGiants: require('./MatchupsForSeahawksVsGiants').default,
	howMichaelBigGucciJerrellUsed: require('./howMichaelBigGucciJerrellUsed').default,
	HeadlinesBeforeTheSeahawksMnf: require('./HeadlinesBeforeTheSeahawksMnf').default,
	MatchupsInSeahawksVsCardinals: require('./MatchupsInSeahawksVsCardinals').default,
	takeawaysFromSeahawksLossToBuccaneers: require('./takeawaysFromSeahawksLossToBuccaneers').default,
	takeawaysFromTheSeahawksWinOverCd: require('./takeawaysFromTheSeahawksWinOverCd').default,
	takeawaysFromSeahawksLossToPanthers: require('./takeawaysFromSeahawksLossToPanthers').default,
	headlinesForSeahawksVersusBengals: require('./headlinesForSeahawksVersusBengals').default,
	grandSeahawksMidLateAprilMock: require('./grandSeahawksMidLateAprilMock').default,
	seahawksTeProfileOffseason: require('./seahawksTeProfileOffseason').default,
	lastMinuteSeattleSeahawksMock: require('./lastMinuteSeattleSeahawksMock').default,
	takeawaysFromSeahawksLossToers0: require('./takeawaysFromSeahawksLossToers0').default,
	MatchupsForSeahawksVsCardinals: require('./MatchupsForSeahawksVsCardinals').default,
	takeawaysFromTheSeahawksWinOverDa: require('./takeawaysFromTheSeahawksWinOverDa').default,
	takeawaysFromSeahawksWinOverb: require('./takeawaysFromSeahawksWinOverb').default,
	MatchupsToWatchDuringers: require('./MatchupsToWatchDuringers').default,
	seahawksMissedExpectationsEntering: require('./seahawksMissedExpectationsEntering').default,
	findlaysUnderdogsHowAdoBumba: require('./findlaysUnderdogsHowAdoBumba').default,
	seahawksHeadlinesEnteringThe: require('./seahawksHeadlinesEnteringThe').default,
	MatchupsForSeahawksVsRaiders: require('./MatchupsForSeahawksVsRaiders').default,
	analysisImprovingSeahawksSpecial: require('./analysisImprovingSeahawksSpecial').default,
	MatchupsForSeahawksVsFalcons: require('./MatchupsForSeahawksVsFalcons').default,
	headlinesForSeahawksVsCardinals: require('./headlinesForSeahawksVsCardinals').default,
	whoFellOffADeepLookIntoPreseason: require('./whoFellOffADeepLookIntoPreseason').default,
	MatchupsForSeahawksFinaleVs: require('./MatchupsForSeahawksFinaleVs').default,
	flightRadarPotentialSeahawksOn: require('./flightRadarPotentialSeahawksOn').default,
	stockCheckWeekProspectRisers: require('./stockCheckWeekProspectRisers').default,
	freeAgencyMarketOverviewPositionAe: require('./freeAgencyMarketOverviewPositionAe').default,
	seahawksEarlyMidAprilMockDraft: require('./seahawksEarlyMidAprilMockDraft').default,
	analysisSeahawksEmergingDefensive: require('./analysisSeahawksEmergingDefensive').default,
	NflDraftScoutingChristian: require('./NflDraftScoutingChristian').default,
	positionalOverviewOfTheSeattle: require('./positionalOverviewOfTheSeattle').default,
	seahawksTakeawaysFromLossToRams: require('./seahawksTakeawaysFromLossToRams').default,
	takeawaysFromBengalsVsSeahawks: require('./takeawaysFromBengalsVsSeahawks').default,
	freeAgencyMarketOverviewPositionE: require('./freeAgencyMarketOverviewPositionE').default,
    offseasonPickups2022: require('./offseasonPickups2022').default,
    offseasonOffenseDraftTargets2022: require('./offseasonOffenseDraftTargets2022').default,
    offseasonDefensiveDraftTargets2022: require('./offseasonDefensiveDraftTargets2022').default,
    oldArticlePlaceholders: require('./oldArticlePlaceholders').default,
    JerrellPreTrainingCampInterview: require('./JerrellPreTrainingCampInterview').default,
    RolandTankTrembleUnderdog: require('./RolandTankTrembleUnderdog').default,
    darrellTaylorTrade: require('./darrellTaylorTrade').default,
    rosterOffensivePredictions: require('./rosterOffensivePredictions').default,
    rosterDefensivePrediction: require('./rosterDefensivePrediction').default,
};

export default posts;
