package vggames.shared

import vggames.shared.task.Descriptions
import vggames.shared.task.TaskGroup
import vggames.shared.task.Exercise

class Game(engine : GameEngine, descriptions : Descriptions) {

  val tasks = engine.tasks.withDescriptions(descriptions)

  def task(index : Int) : Exercise = tasks(index)

  def groups = tasks.map(t => Group(t.group, t.index, t.description)).distinct

  def size = tasks.size

  def description = engine.description

  def name = engine.name

  def path = engine.path

  def hasTutor = engine.hasTutor

  def resourceDescription = engine.resourceDescription

  def advance(index : Int)(f : Int => Unit) = if (hasNextTask(index)) f(nextTask(index))

  def atGroupEnd(index : Int)(f : => Unit) =
    if (!hasNextTask(index) || task(index).groupName != task(nextTask(index)).groupName) f

  def atEnd(index : Int)(f : => Unit) = if (!hasNextTask(index)) f

  def nextTask(index : Int) = index + 1

  def hasNextTask(index : Int) = nextTask(index) < size
}

case class Group(taskGroup : TaskGroup, index : Int, description : String) {
  override def equals(o : Any) = taskGroup.equals(o.asInstanceOf[Group].taskGroup)
  override def hashCode = taskGroup.hashCode
}
