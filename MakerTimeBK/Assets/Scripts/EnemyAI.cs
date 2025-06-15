using UnityEngine;

public class EnemyAI : MonoBehaviour
{
    public float detectionRange = 10f;
    public float attackRange = 2f;
    public float moveSpeed = 3f;
    public int damage = 10;

    private Transform player;
    private bool isAttacking = false;

    void Start()
    {
        player = GameObject.FindGameObjectWithTag("Player").transform;
    }

    void Update()
    {
        float distance = Vector3.Distance(transform.position, player.position);

        if (distance <= detectionRange)
        {
            // –ухаЇмось до гравц€
            if (distance > attackRange)
            {
                isAttacking = false;
                transform.position = Vector3.MoveTowards(transform.position, player.position, moveSpeed * Time.deltaTime);
                transform.LookAt(player);
            }
            else
            {
                // јтакуЇмо
                if (!isAttacking)
                {
                    isAttacking = true;
                    Attack();
                }
            }
        }
    }

    void Attack()
    {
        Debug.Log("Enemy attacks player!");
        // “ут можна викликати метод втрати здоров'€ у гравц€
        // player.GetComponent<PlayerHealth>().TakeDamage(damage);
    }
}
