using Pathfinding;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Enemy : MonoBehaviour
{
    [SerializeField] Patrol patrol;
    [SerializeField]AIDestinationSetter destination;
    [SerializeField] GameObject target;

    [SerializeField] int health = 5;

    private Slider slider;

    private void Start()
    {
        slider = gameObject.transform.GetChild(1).
            GetComponentInChildren<Slider>();
        slider.minValue = 1;
        slider.maxValue = health;
        slider.value = health;
        patrol = GetComponent<Patrol>();
        destination = GetComponent<AIDestinationSetter>();
        target = GameObject.Find("player");
        destination.target = target.transform;
        for (int i = 0; i < GameObject.Find("PatrolPoint").transform.childCount; i++)
        {

        }

    }

    void Update()
    {
        float distance = Vector2.Distance(transform.position,
            target.transform.position);
        if (distance < 5f)
        {
            destination.enabled = true;
            patrol.enabled = true;
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "bullet")
        {
            health--;
            slider.value = health;
            Destroy(collision.gameObject);
            if (health <= 0) Destroy(gameObject);
            transform.GetChild(0).gameObject
                .GetComponent<SpriteRenderer>()
                .color = new Color(254, 0, 0);
            Invoke("ChangeColor", 0.2f);
        }
    }

    private void ChangeColor()
    {
        transform.GetChild(0).gameObject
            .GetComponent<SpriteRenderer>()
            .color = Color.white;
    }

}
