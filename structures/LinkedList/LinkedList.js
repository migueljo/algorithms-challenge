class LinkedList {
  head = null
  tail = null
  size = 0

  add(item) {
    if (item === null || item === undefined) return

    if (this.head === null) {
      const node = { data: item, next: null }
      this.head = node
      this.tail = node
    } else {
      const node = { data: item, next: null }
      this.tail.next = node
      this.tail = node
    }

    this.size++
  }

  remove = () => {
    if (this.size === 0) return
    if (this.size === 1) {
      this.head = null
      this.tail = null
      this.size = 0
      return
    }

    let penultimate = null
    let current = this.head

    while (current.next) {
      if (current.next === this.tail) {
        penultimate = current
        break
      }
      current = current.next
    }
    penultimate.next = null
    this.tail = penultimate
    this.size--
  }

  removeItem() {

  }

  get() {

  }

  isEmpty() {
    return this.size === 0
  }

  forEach(fn) {
    if (this.size === 0) return
    let current = this.head

    while (current) {
      fn(current)
      current = current.next
    }
  }
}

module.exports = LinkedList
