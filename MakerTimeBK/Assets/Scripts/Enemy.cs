using UnityEngine;

public class Enemy : MonoBehaviour
{
    public Transform[] waypoints;     // Точки шляху
    public float speed = 2f;          // Швидкість руху
    public float reachDistance = 0.1f; // Наскільки близько треба підійти до точки

    private int currentWaypointIndex = 0;
    private Rigidbody2D rb;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void FixedUpdate()
    {
        if (waypoints.Length == 0) return;

        Vector2 currentPos = rb.position;
        Vector2 targetPos = waypoints[currentWaypointIndex].position;
        Vector2 direction = (targetPos - currentPos).normalized;

        // Рух до цілі
        Vector2 newPos = Vector2.MoveTowards(currentPos, targetPos, speed * Time.fixedDeltaTime);
        rb.MovePosition(newPos);

        // Перевірка досягнення точки
        if (Vector2.Distance(currentPos, targetPos) < reachDistance)
        {
            currentWaypointIndex = (currentWaypointIndex + 1) % waypoints.Length;
        }

        // Фліп по X для розвороту спрайта
        if (direction.x != 0)
        {
            Vector3 scale = transform.localScale;
            scale.x = Mathf.Sign(direction.x) * Mathf.Abs(scale.x);
            transform.localScale = scale;
        }
    }

    void OnDrawGizmos()
    {
        Gizmos.color = Color.red;
        foreach (var point in waypoints)
        {
            if (point != null)
                Gizmos.DrawSphere(point.position, 0.1f);
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.CompareTag("bullet"))
        {
            Destroy(gameObject);
        }
    }
}
