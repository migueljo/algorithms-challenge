const LinkedList = require("./LinkedList")

test('LinkedList should exists', () => {
  expect(LinkedList).toBeDefined()
})

describe("add method", () => {
  test('should exists', () => {
    const ll = new LinkedList()
    expect(ll.add).toBeDefined()
  })

  test('should not add a new node if item is undefined/null', () => {
    const ll = new LinkedList()
    ll.add()
    expect(ll.size).toBe(0)
  })

  test('should add the first item as the head and tail node', () => {
    const ll = new LinkedList()
    ll.add("alberto")
    const expected = "alberto"
    expect(ll.head.data).toBe(expected)
    expect(ll.tail.data).toBe(expected)
  })

  test('should add the elements in right order', () => {
    const ll = new LinkedList()
    ll.add("alberto")
    ll.add("andres")
    ll.add("carolina")

    expect(ll.head.data).toBe("alberto")
    expect(ll.head.next.data).toBe("andres")
    expect(ll.head.next.next.data).toBe("carolina")
  })
})

describe("remove method", () => {
  test("should exists", () => {
    const ll = new LinkedList()
    expect(ll.remove).toBeDefined()
  })

  test("should do nothing if list is empty", () => {
    const ll = new LinkedList()
    expect(ll.remove).not.toThrow()
    expect(ll.head).toBe(null)
    expect(ll.tail).toBe(null)
    expect(ll.size).toBe(0)
  })
})
