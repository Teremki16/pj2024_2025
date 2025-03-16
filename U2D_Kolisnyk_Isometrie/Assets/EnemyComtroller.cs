using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Pathfinding;
using UnityEngine.UI;

public class EnemyComtroller : MonoBehaviour
{
    [SerializeField] GameObject player;
    [SerializeField] Patrol patrol;
    [SerializeField] AIDestinationSetter ai;
    public int hp = 6;
    private Slider slider;
    void Start()
    {
        slider = transform.GetChild(1).GetComponentInChildren<Slider>();
        slider.minValue = 1;
        slider.maxValue = hp;
        slider.value = hp;

        patrol = GetComponent<Patrol>();
        ai = GetComponent<AIDestinationSetter>();
        player = FindObjectOfType<PlayerController>().gameObject;
        ai.target = player.transform;

        for (int i=0; i < transform.parent.transform.GetChildCount() - 1;i++)
        {

        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.CompareTag("Bullet"))
        {
            hp -= 1;
            slider.value = hp;
            Destroy(collision.gameObject);
            transform.GetChild(0).gameObject.GetComponent<SpriteRenderer>().color = new Color(255, 0, 0);
            Invoke("defcolor", 0.2f);
            if(hp<=0)
            {
                Destroy(gameObject);
            }
        }
    }

    void Update()
    {
        float waytoplayer = Vector3.Distance(transform.position, player.transform.position);
        if(waytoplayer<=2.5f)
        {
            patrol.enabled = false;
            ai.enabled = true;
        }
        if(waytoplayer>5f)
        {
            patrol.enabled = true;
            ai.enabled = false;
        }
    }
    private void defcolor()
    {
        transform.GetChild(0).gameObject.GetComponent<SpriteRenderer>().color = new Color(255, 255, 255);
    }
}
