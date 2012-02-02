package net.vidageek.games.regex.task;

import net.vidageek.games.regex.Regex;
import net.vidageek.games.task.JudgedTask;
import net.vidageek.games.task.Task;

import com.google.common.base.Joiner;

public class MultipleAnswersMatcher implements Task {

	private final int index;
	private final String[] matchingTargets;

	public MultipleAnswersMatcher(int index, String...matchingTargets) {
		this.index = index;
		this.matchingTargets = matchingTargets;
		
	}

	public JudgedTask judge(String challenge) {
		try {
			return new Regex(challenge).matchAll(this.matchingTargets);
			
		} catch (Exception e) {
			return new Error(e);
		}
	}

	public String getDescription() {
		return "Matching com grupos de caracteres";
	}

	public String getChallenge() {
		return "Qual regex dá match em [" + Joiner.on(" e ").join(this.matchingTargets) + "]";
	}

	public int getIndex() {
		return this.index;
	}

}