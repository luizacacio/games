package vggames.shared.task.status

import scala.collection.JavaConverters.seqAsJavaListConverter

import com.google.common.base.Joiner

import vggames.shared.task.JudgedTask

class Faileds extends JudgedTask with Iterable[Failed] {

  private var faileds = List[Failed]()

  def getOk() : Boolean = faileds.isEmpty

  def getReason() : String = Joiner.on("<br />").join(faileds asJava)

  def addOnlyJudgedFailed(judgedTask : JudgedTask) {
    judgedTask match {
      case task : Failed => faileds = faileds :+ task
      case _ =>
    }
  }

  def addAll(faileds : Faileds) : Unit = faileds foreach (addOnlyJudgedFailed)

  def judgment() : JudgedTask = if (getOk()) new Ok() else new Failed(this)

  def iterator() : Iterator[Failed] = faileds.iterator
}