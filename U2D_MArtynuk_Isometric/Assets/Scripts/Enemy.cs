using Pathfinding;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Enemy : MonoBehaviour
{
    [SerializeField] Patrol patrol;
    [SerializeField] AIDestinationSetter destination;
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
        target = GameObject.Find("Player");
        destination.target = target.transform;
        for (int i = 0; i < GameObject.Find("PatrolPoints").transform.childCount; i++)
        {
            Transform point = GameObject.Find("PatrolPoints").transform.GetChild(i);
            patrol.targets.SetValue(point, i);
        }
        
    }

    void Update()
    {
        float distance = Vector2.Distance(transform.position,
            target.transform.position);
        if (distance < 5f)
        {
            destination.enabled = true;
            patrol.enabled = false;
        }
        else
        {
            destination.enabled = false;
            patrol.enabled = true;
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "bullet")
        {
            Debug.Log("damage enemy");
            health--;
            slider.value = health;
            Destroy(collision.gameObject);
            if (health <= 0) Destroy(gameObject);
            transform.GetChild(0).gameObject
                .GetComponent<SpriteRenderer>()
                .color = new Color(255, 0, 0);
            GameObject.Find("SoundManager")
               .GetComponent<SoundManager>()
               .DamageS();
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
