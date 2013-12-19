backFade = undefined
courseraSubmissionBox = undefined

window.courseraSubmissionBox = ->
    if (not backFade) or (not courseraSubmitDiv)
        backFade = jQuery '<div>', {
            css: {
                'width':'100%',
                'height':'100%',
                'position':'absolute',
                'z-index':'300',
                'background-color':'#000000',
                'opacity':'.5'
            },
            click: (clickEvent) ->
                backFade.hide()
                courseraSubmitDiv.hide()
                return
        }
        courseraSubmitDiv = jQuery '<div>', {
            css: {
                'width':'80%',
                'height':'80%',
                'left':'10%',
                'top':'10%',
                'position':'absolute',
                'z-index':'301',
                'background-color':'#FFFFFF'
            }
        }
        assignmentScoresDiv = jQuery '<div>'
        assignmentSubmitDiv = jQuery '<div>'
        assignmentFeedbackDiv = jQuery '<div>'

        courseraSubmitDiv.append assignmentScoresDiv
        courseraSubmitDiv.append assignmentSubmitDiv
        courseraSubmitDiv.append assignmentFeedbackDiv

        jQuery("body").prepend backFade
        jQuery("body").prepend courseraSubmitDiv
    assignmentScoresDiv.empty()
    for grader in codeland.graders
        grader.score = 0
        grader.maxScore = 0
        for target in grader.targets
            if target.type == "game"
                addGameScore grader, target.key
            else if target.type == "quest"
                quest = codeland.quests[codeland.questIndexbyQuests[target.key]]
                for game in quest.games
                    addGameScore grader, game
            else
                console?.log "Unkown grader target type: #{grader.target}"
        assignmentScoresDiv.append "<p>#{grader.title}: #{grader.score} / #{grader.maxScore} </p>"
    backFade.show()
    courseraSubmitDiv.show()
    return

addGameScore = (grader, game) ->
    gameStatistics = codeland.loadGameStats game
    grader.score += gameStatistics.hiscore
    grader.maxScore += codeland.gameDescriptions[game].maxScore
    return
