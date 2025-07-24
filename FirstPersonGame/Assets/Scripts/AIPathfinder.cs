using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AIPathfinder : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] float turnSpeed;
    [SerializeField] Transform[] patrolPoints;

    int currentPoint;
    Collider[] destCollider;
    Rigidbody rb;
    Transform target;
    Transform enemy;
    bool isAttack;
    AudioSource auS;

    private void Awake()
    {
        rb = GetComponentInChildren<Rigidbody>();
        enemy = rb.transform;
    }

    void Start()
    {
        target = GameObject.Find("Player").transform;
        auS = GetComponent<AudioSource>();
        InvokeRepeating(nameof(FindTarget), 0f, 2f);
    }

    bool isPlayed = false;

    // Update is called once per frame
    void Update()
    {
        if (isAttack)
        {
            if (!isPlayed)
            {

                auS.Play();
                isPlayed = true;
            }
            Move(target);
        }
        else
        {
            Move(patrolPoints[currentPoint]);
            isPlayed = false;
        }
    }

    void FindTarget()
    {
        if (Vector3.Distance(enemy.position, target.position) < 10f)
        {
            isAttack = true;
        }
        else
        {
            isAttack = false;
            if (Vector3.Distance(new Vector3(enemy.position.x, 0, enemy.position.z),
                new Vector3(patrolPoints[currentPoint].position.x, 0f, patrolPoints[currentPoint].position.z)) < 2f)
            {
                currentPoint++;
                if (currentPoint >= patrolPoints.Length) currentPoint = 0;
            }
        }
    }

    void Move(Transform targ)
    {
        Vector3 targetDirection = targ.position - enemy.position;
        targetDirection = new Vector3(targetDirection.x, 0f, targetDirection.z);
        float singleStep = turnSpeed * Time.fixedDeltaTime;
        Vector3 look = Vector3.RotateTowards(enemy.forward, targetDirection, singleStep, 0f);
        enemy.rotation = Quaternion.LookRotation(look);
        enemy.Translate(Vector3.forward * speed);
    }

    public void Jump()
    {
        rb.velocity = new Vector3(0f, 5f, 0f);
    }

    public void Explosion()
    {
        destCollider = Physics.OverlapSphere(enemy.position, 2f);
        foreach (Collider col in destCollider)
        {
            if (col.gameObject.tag != "Player") Destroy(col.gameObject);
        }
        Destroy(gameObject);
    }
}
